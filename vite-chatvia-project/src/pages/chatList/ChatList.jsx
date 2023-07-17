import chatImg from '../../assets/users/avatar-2.jpg'

const ChatList = () => {
  return (
    <div className='chats'>
      <div className='user-chat'>
        <img src={chatImg} alt='Pic of person in chat list' />
        <div className='user-chat-info'>
          <span>Patrick Hendricks</span>
          <p>Hello you bum!</p>
        </div>
      </div>
      <div className='user-chat'>
        <img src={chatImg} alt='Pic of person in chat list' />
        <div className='user-chat-info'>
          <span>Patrick Hendricks</span>
          <p>Hello you bum!</p>
        </div>
      </div>
      <div className='user-chat'>
        <img src={chatImg} alt='Pic of person in chat list' />
        <div className='user-chat-info'>
          <span>Patrick Hendricks</span>
          <p>Hello you bum!</p>
        </div>
      </div>
      <div className='user-chat'>
        <img src={chatImg} alt='Pic of person in chat list' />
        <div className='user-chat-info'>
          <span>Patrick Hendricks</span>
          <p>Hello you bum!</p>
        </div>
      </div>
      <div className='user-chat'>
        <img src={chatImg} alt='Pic of person in chat list' />
        <div className='user-chat-info'>
          <span>Patrick Hendricks</span>
          <p>Hello you bum!</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList
