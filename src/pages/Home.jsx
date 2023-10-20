import { useEffect, useState } from 'react'
import { db, auth } from '../firebase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import RegisteredUsers from '../components/RegisteredUsers'

const Home = () => {
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
    <div className='contacts-container'>
      <h2>Contacts</h2>
      <div className='users-container'>
        {users.map((user) => (
          <RegisteredUsers key={user.uid} user={user} selectUser={selectUser} />
        ))}
      </div>
    </div>
  )
}

export default Home
