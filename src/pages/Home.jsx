import { useEffect, useState } from 'react'
import { db, auth } from '../firebase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

const Home = () => {
  const [users, setUsers] = useState([])
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
  console.log(users)
  return <div>Home Page</div>
}

export default Home
