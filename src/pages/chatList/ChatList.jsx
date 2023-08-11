import { useEffect, useState } from 'react'
import { db, auth } from '../../firebase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import Search from './Search'
import chatImg from '../../assets/users/avatar-2.jpg'
import Loading from '../../components/Loading'

const ChatList = () => {
  const [users, setUsers] = useState([])
  const [chat, setchat] = useState('')
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
      setUsers(users)
      setIsLoading(false)
    })
    return () => unsub()
  }, [])
  const selectUser = (user) => {
    setchat(user)
    console.log(user)
  }
  return (
    <div className='chat-layout'>
      <Search />

      {isLoading ? (
        <Loading />
      ) : (
        users.map((user) => (
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
    </div>
  )
}

export default ChatList
