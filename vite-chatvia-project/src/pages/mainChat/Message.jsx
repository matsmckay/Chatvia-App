import currentUserPic from '../../assets/users/avatar-1.jpg'
import chatSentImage from '../../assets/small/img-1.jpg'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageContent'>
        <div className='messageInfo'>
          <p>Wassssssssssup</p>
          {/* <img src={chatSentImage} alt='Random Image sent by chat contact' /> */}
          <span>Just Now</span>
        </div>
        <div className='messageSender'>
          <p>Doris Brown</p>
        </div>
      </div>
      <div className='messagePic'>
        <img
          src={currentUserPic}
          alt='Pic of current user in main chat besides their messages'
        />
      </div>
    </div>
  )
}

export default Message
