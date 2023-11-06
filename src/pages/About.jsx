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
      <h2>User Logout</h2>
      <div className='user-logout'>
        {user ? (
          <>
            <button className='logout-btn btn' onClick={handleSignout}>
              Logout
            </button>
            <p>
              Don't want to logout? Maybe check out and edit your
              <button className='profile-link btn'>
                <Link to='/profile'>Profile</Link>??!!
              </button>
            </p>
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
