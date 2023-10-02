import { useEffect, useState } from 'react'
import chatImg from '../assets/users/avatar-2.jpg'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../firebase'

const User = ({ user, selectUser, user1 }) => {
  const user2 = user?.uid
  const [data, setData] = useState('')

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
  console.log(data)
  return (
    <div className='chats-container' onClick={() => selectUser(user)}>
      <div className='user-chat'>
        <img src={user.avatar || chatImg} alt='avatar' />
        <div className='user-chat-info'>
          <div className='list-head'>
            <h4>{user.name}</h4>

            {/* <p className='time'>11:47</p>
          </div>
          <div className='message-p'>
            <p>Hello you bum!</p> */}
            <div
              className={`user-status ${user.isOnline ? 'online' : 'offline'}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
