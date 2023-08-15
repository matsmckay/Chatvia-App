import { useEffect, useState } from 'react'
import { db, auth } from '../../firebase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import Search from './Search'
import chatImg from '../../assets/users/avatar-2.jpg'
import Loading from '../../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { setChatList, setSelectedChatUser } from '../../features/cart/cartSlice'

const ChatList = () => {
  const dispatch = useDispatch()
  const chatList = useSelector((state) => state.cart.chatList)
  const selectedChatUser = useSelector((state) => state.cart.selectedChatUser)
  // const [users, setUsers] = useState([])
  // const [chat, setchat] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const usersRef = collection(db, 'users')
    // create query object
    const q = query(usersRef, where('uid', 'not-in', [auth.currentUser.uid]))
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
  }, [])
  const selectUser = (user) => {
    dispatch(setSelectedChatUser(user))
    console.log(user)
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
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {/* <div className='messages-container'>
        {selectedChatUser ? (
          <div className='messages-user'>
            <h3>{selectedChatUser.name}</h3>
          </div>
        ) : (
          <h3 className='no-conv'>Select a user to start the conversation</h3>
        )}
      </div> */}
    </div>
  )
}

export default ChatList
