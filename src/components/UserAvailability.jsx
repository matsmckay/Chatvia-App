import currentUserPic from '../assets/users/avatar-1.jpg'

const UserAvailability = () => {
  return (
    <div className='user-available'>
      <img src={currentUserPic} alt='Profile pic of current user' />
      <p>user name</p>
      <p>user availability</p>
    </div>
  )
}

export default UserAvailability
