import { useEffect, useState } from 'react'
import { db, auth } from '../../firebase'
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from 'firebase/firestore'
import Search from './Search'
import chatImg from '../../assets/users/avatar-2.jpg'
import Loading from '../../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import {
  setChatList,
  setSelectedChatUser,
  setMsgs,
} from '../../features/cart/cartSlice'

const ChatList = () => {
  const dispatch = useDispatch()
  const chatList = useSelector((state) => state.cart.chatList)
  const [isLoading, setIsLoading] = useState(true)
  const user1 = auth.currentUser.uid

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

  const selectUser = (user) => {
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
    })
  }
  return (
    <div className='chat-layout'>
      <Search />

      {isLoading ? (
        <Loading />
      ) : (
        chatList.map((user) => (
          <div
            className='chats-container'
            onClick={() => selectUser(user)}
            key={user.uid}
          >
            <div className='user-chat'>
              <img src={user.avatar || chatImg} alt='avatar' />
              <div className='user-chat-info'>
                <div className='list-head'>
                  <h4>{user.name}</h4>

                  <p className='time'>11:47</p>
                </div>
                <div className='message-p'>
                  <p>Hello you bum!</p>
                  <div
                    className={`user-status ${
                      user.isOnline ? 'online' : 'offline'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default ChatList
