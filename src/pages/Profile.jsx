import UserAvailability from '../components/UserAvailability'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <h1>My Profile</h1>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
      <UserAvailability />
      <div className='quote-container'>
        "Chatting is like a joyful rollercoaster ride—laugh out loud, type away
        your dreams, and remember, the emoticons are the spice of life! 🎢😂🚀"
      </div>
      <div className='profile-info-container'>
        <h3>About</h3>
        <div className='profile-info'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Joined on: ...</h4>
          <h4>Time</h4>
          <h4>Location</h4>
        </div>
      </div>
    </div>
  )
}

export default Profile
