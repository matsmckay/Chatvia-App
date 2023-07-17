import UserAvailability from '../components/UserAvailability'

const Profile = () => {
  return (
    <div className='profile-component'>
      <div className='user'>
        <h2>My Profile</h2>
      </div>
      <UserAvailability />
    </div>
  )
}

export default Profile
