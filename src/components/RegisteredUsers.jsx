import Img from '../assets/users/avatar-8.jpg'

const RegisteredUsers = ({ user, selectUser }) => {
  return (
    <div className='registered-container' onClick={() => selectUser(user)}>
      <div className='user-info'>
        <div className='user-detail'>
          <img src={user.avatar || Img} alt='avatar' className='avatar' />
          <h4>{user.name}</h4>
        </div>
        <div
          className={`user-status ${user.isOnline ? 'online' : 'offline'}`}
        ></div>
      </div>
    </div>
  )
}

export default RegisteredUsers
