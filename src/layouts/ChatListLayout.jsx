import { useEffect, useState } from 'react'
import { db, auth } from '../firebase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import ChatList from '../pages/chatList/ChatList'
import Search from '../pages/chatList/Search'

const ChatListLayout = () => {
  const [users, setUsers] = useState([])
  const [chat, setchat] = useState('')
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
      {users.map((user) => (
        <ChatList key={user.uid} user={user} selectUser={selectUser} />
      ))}
      <div className='messages-container'>
        {chat ? (
          <div className='messages-user'>
            <h3>{chat.name}</h3>
          </div>
        ) : (
          <h3 className='no-conv'>Select a user to start a conversation</h3>
        )}
      </div>
    </div>
  )
}

export default ChatListLayout
