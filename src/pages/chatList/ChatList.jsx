import chatImg from '../../assets/users/avatar-2.jpg'

const ChatList = ({ user, selectUser }) => {
  return (
    <div className='chats-container' onClick={() => selectUser(user)}>
      <div className='user-chat'>
        <img src={user.avatar || chatImg} alt='avatar' />
        <div className='user-chat-info'>
          <div className='list-head'>
            <h4>{user.name}</h4>
            <p className='time'>11:47</p>
          </div>
          <div className='message-p'>
            <p>Hello you bum!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatList
