import chatContactPic from '../../assets/users/avatar-4.jpg'
import chatSentImage from '../../assets/small/img-1.jpg'

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
          <img src={chatSentImage} alt='Random Image sent by chat contact' />
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
