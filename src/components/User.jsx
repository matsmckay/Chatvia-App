import { useEffect, useState } from 'react'
import chatImg from '../assets/users/anon-photo-chat-app.jpg'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { useSelector } from 'react-redux'

const User = ({ user, selectUser, user1 }) => {
  const user2 = user?.uid
  const [data, setData] = useState('')
  const selectedChatUser = useSelector((state) => state.cart.selectedChatUser)

  useEffect(() => {
    const id = user1
      ? user1 > user2
        ? `${user1 + user2}`
        : `${user2 + user1}`
      : 'User not authenticated'
    let unsub = onSnapshot(doc(db, 'lastMsg', id), (doc) => {
      setData(doc.data())
    })
    return () => unsub()
  }, [])

  return (
    <div
      className={
        selectedChatUser
          ? `chats-container ${
              selectedChatUser.name === user.name && 'selected-user'
            }`
          : null
      }
      onClick={() => selectUser(user)}
    >
      <div className='user-chat'>
        <img src={user.avatar || chatImg} alt='avatar' />
        <div className='user-chat-info'>
          <div className='list-head'>
            <h4>{user.name}</h4>
            {data?.from !== user1 && data?.unread && (
              <small className='unread'>New</small>
            )}
            <div
              className={`user-status ${user.isOnline ? 'online' : 'offline'}`}
            ></div>
          </div>
        </div>
      </div>
      {data && (
        <p className='truncate'>
          <strong>{data.from === user1 ? 'Me: ' : null}</strong>
          {data.text}
        </p>
      )}
    </div>
  )
}

export default User
