import UserAvailability from '../components/UserAvailability'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { updateProfile } from 'firebase/auth'

const Profile = () => {
  const [user, setUser] = useState(null)
  const [newDisplayName, setNewDisplayName] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
    })
    return () => unsubscribe
  }, [])

  const handleChangeDisplayName = () => {
    const user = auth.currentUser
    console.log(user)
    if (user) {
      updateProfile(user, {
        displayName: newDisplayName,
      })
        .then(() => {
          console.log('display name update successfully')
          setUser({ ...user, displayName: newDisplayName })
          setNewDisplayName('')
        })
        .catch((error) => {
          console.error('error updating display name:', error)
        })
    }
  }

  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <h2>My Profile</h2>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
      <UserAvailability />
      {/* Figure out a way to edit quote container */}
      <div className='quote-container'>
        "Remember, the emoticons are the spice of life! 🎢😂🚀"
      </div>
      <div className='profile-info-container'>
        <div className='profile-info'>
          <h4>Name: {user ? auth.currentUser.displayName : 'Not Available'}</h4>
          <input
            type='text'
            placeholder='Change Display Name'
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
          />
          <button className='profile-btn btn' onClick={handleChangeDisplayName}>
            CHANGE!
          </button>
          <h4>Email: {user ? auth.currentUser.email : 'Not Available'}</h4>
          {/* <h4>
            Joined on:{' '}
            {user
              ? new Date(user.metadata.creationTime).toDateString()
              : 'Not Available'}
          </h4> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
