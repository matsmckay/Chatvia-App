import { useEffect, useState } from 'react'
import { db, auth } from '../../firebase'
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  getDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import {
  setChatList,
  setSelectedChatUser,
  setMsgs,
} from '../../features/cart/cartSlice'
import Loading from '../../components/Loading'
import User from '../../components/User'
import MainChatLayout from '../../layouts/MainChatLayout'
import Search from '../../pages/chatList/Search'

const ChatList = () => {
  const dispatch = useDispatch()
  const chatList = useSelector((state) => state.cart.chatList)
  const [isLoading, setIsLoading] = useState(true)
  const user1 = auth.currentUser.uid

  const [currentView, setCurrentView] = useState('chatList')

  useEffect(() => {
    try {
      const usersRef = collection(db, 'users')
      // create query object
      const q = query(usersRef, where('uid', 'not-in', [user1]))
      // execute query
      const unsub = onSnapshot(q, (querySnapshot) => {
        let users = []
        querySnapshot.forEach((doc) => {
          users.push(doc.data())
        })
        dispatch(setChatList(users))
        setIsLoading(false)
      })
      return () => unsub()
    } catch (error) {
      console.error('Firestore Error', error.message)
    }
  }, [])

  const selectUser = async (user) => {
    dispatch(setSelectedChatUser(user))
    const user2 = user.uid
    const id = user1
      ? user1 > user2
        ? `${user1 + user2}`
        : `${user2 + user1}`
      : 'User not authenticated'

    const msgsRef = collection(db, 'messages', id, 'chat')
    const q = query(msgsRef, orderBy('createdAt', 'asc'))

    onSnapshot(q, (querySnapshot) => {
      let msgs = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        // convert Firestore Timestamp to milliseconds since epoch
        const createdAtMillis = data.createdAt.toMillis()
        // Create a new object with a timestamp in millseconds
        const modifiedData = {
          ...data,
          createdAt: createdAtMillis,
        }
        msgs.push(modifiedData)
      })
      dispatch(setMsgs(msgs))
      setCurrentView('mainChatLayout')
    })

    // get last message between logged in user and selected user
    const docSnap = await getDoc(doc(db, 'lastMsg', id))
    // if last messages exists and message is from selected user
    if (docSnap.data() && docSnap.data().from !== user1) {
      // update last message doc, set unread to false
      await updateDoc(doc(db, 'lastMsg', id), {
        unread: false,
      })
    }
  }

  const handleBack = () => {
    setCurrentView('chatList')
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='chat-layout'>
          {currentView === 'chatList' && <Search />}
          <div
            className={`mc ${
              currentView === 'mainChatLayout' ? 'hide-main-chat' : ''
            }`}
          >
            {!isLoading &&
              currentView === 'chatList' &&
              chatList.map((user) => (
                <User
                  key={user.uid}
                  user={user}
                  selectUser={selectUser}
                  user1={user1}
                />
              ))}
            {currentView === 'mainChatLayout' && (
              <MainChatLayout handleBack={handleBack} />
            )}
          </div>
          {currentView === 'mainChatLayout' && (
            <div className='additional-chatlist'>
              <Search />
              {chatList.map((user) => (
                <User
                  key={user.uid}
                  user={user}
                  selectUser={selectUser}
                  user1={user1}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ChatList
