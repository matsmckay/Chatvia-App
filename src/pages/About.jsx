import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { signOut } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
import { AuthContext } from '../context/auth'

const About = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const handleSignout = async () => {
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      isOnline: false,
    })
    await signOut(auth)
    navigate('/login')
  }

  return (
    <div>
      <h1>User Logout</h1>
      <div>
        {user ? (
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
