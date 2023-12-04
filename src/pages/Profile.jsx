import UserAvailability from '../components/UserAvailability'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { updateProfile, updateEmail } from 'firebase/auth'

const Profile = () => {
  const [user, setUser] = useState(null)
  const [newDisplayName, setNewDisplayName] = useState('')

  const [quote, setQuote] = useState('')
  const [newQuote, setNewQuote] = useState(quote)
  const [newEmail, setNewEmail] = useState('')
  const [emailError, setEmailError] = useState('')

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
    if (user && newDisplayName.trim() !== '') {
      updateProfile(user, {
        displayName: newDisplayName.trim(),
      })
        .then(() => {
          console.log('display name update successfully')
          setUser({ ...user, displayName: newDisplayName.trim() })
          setNewDisplayName('')
        })
        .catch((error) => {
          console.error('error updating display name:', error)
        })
    } else {
      console.error('Invalid display name')
    }
  }
  useEffect(() => {
    const fetchUserQuote = async () => {
      try {
        // Get the user's Firestore document (replace 'your-collection-name' with the actual collection name)
        const docRef = doc(db, 'quotes', auth.currentUser.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          // If the document exists, update the 'quote' state with the quote from Firestore
          const userData = docSnap.data()
          setQuote(userData.quote || quote)
        }
      } catch (error) {
        console.error('Error fetching user quote:', error)
      }
    }

    // Fetch the user's quote when the component mounts
    fetchUserQuote()
  }, [])

  const handleQuoteChange = async () => {
    if (newQuote.trim() !== '') {
      try {
        // Update the Firestore document with the new quote
        const docRef = doc(db, 'quotes', auth.currentUser.uid)
        await setDoc(docRef, { quote: newQuote }, { merge: true })

        // Update the 'quote' state with the new quote
        setQuote(newQuote.trim())
        setNewQuote('')
      } catch (error) {
        console.error('Error updating user quote:', error)
      }
    } else {
      console.error('Invalid quote')
    }
  }

  const handleChangeEmail = () => {
    const user = auth.currentUser
    // Check if the email is valid
    if (!isValidEmail(newEmail)) {
      setEmailError('Please enter a valid email address.')
      return
    }
    if (user) {
      updateEmail(user, newEmail.trim())
        .then(() => {
          console.log('email updated successfully')
          setUser({ ...user, email: newEmail })
          setNewEmail('')
          setEmailError('')
        })
        .catch((error) => {
          console.error('error updating email:', error)
          setEmailError('Error updating email. Please try again.')
        })
    }
  }

  const isValidEmail = (email) => {
    return email.includes('@')
  }

  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <h2>My Profile</h2>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
      <UserAvailability />
      {/* Figure out a way to edit quote container */}
      <div className='profile-info-container'>
        <div className='profile-info'>
          <div className='quote-container'>
            <h4>Quote:</h4>
            <p> "{quote}"</p>
            <input
              type='text'
              placeholder='Change Quote'
              value={newQuote}
              onChange={(e) => setNewQuote(e.target.value)}
            />
            <button className='profile-btn btn' onClick={handleQuoteChange}>
              CHANGE!
            </button>
          </div>
          <div className='name-container'>
            <h4>Display Name: </h4>
            <p>{user ? auth.currentUser.displayName : 'Not Available'}</p>
            <input
              type='text'
              placeholder='Change Display Name'
              value={newDisplayName}
              onChange={(e) => setNewDisplayName(e.target.value)}
            />
            <button
              className='profile-btn btn'
              onClick={handleChangeDisplayName}
            >
              CHANGE!
            </button>
          </div>
          <div className='email-container'>
            <h4>Display Email:</h4>
            <p>{user ? auth.currentUser.email : 'Not Available'}</p>
            <input
              type='text'
              placeholder='Change Display Email'
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value), setEmailError('')
              }}
            />
            <button className='profile-btn btn' onClick={handleChangeEmail}>
              CHANGE!
            </button>
            {emailError && <p className='error-message'>{emailError}</p>}
          </div>
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
