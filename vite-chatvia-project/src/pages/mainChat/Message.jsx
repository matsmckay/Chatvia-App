import chatContactPic from '../../assets/users/avatar-4.jpg'

const Message = () => {
  return (
    <div className='message'>
      <div className='messagePic'>
        <img
          src={chatContactPic}
          alt='Pic of person you are having a chat with'
        />
      </div>
      <div className='messageContent'>
        <div className='messageInfo'>
          <p>Wassssssssssup</p>
          <span>Just Now</span>
        </div>
        <div className='messageSender'>
          <p>Doris Brown</p>
        </div>
      </div>
    </div>
  )
}

export default Message
