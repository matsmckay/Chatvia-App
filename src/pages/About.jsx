import { Link } from 'react-router-dom'
import { auth, db } from '../firebase'
import { signOut } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'

const About = () => {
  const handleSignout = async () => {
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      isOnline: false,
    })
    await signOut(auth)
  }

  return (
    <div>
      <h1>User Logout</h1>
      <div>
        {auth.currentUser ? (
          <>
            <Link to='/profile'>Profile</Link>
            <button className='btn' onClick={handleSignout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default About
