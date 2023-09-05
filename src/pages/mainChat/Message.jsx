import currentUserPic from '../../assets/users/avatar-1.jpg'
import chatSentImage from '../../assets/small/img-1.jpg'

const Message = ({ msg }) => {
  return (
    <div className='chat-box'>
      <div className='message my-message'>
        <p>
          {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
          {msg.text}
          <br />
          <span>Just Now</span>
        </p>
      </div>
      <div className='message frnd-message'>
        <p>
          yoyo, what's up?
          <span>
            <br />
            Just Now
          </span>
        </p>
      </div>
    </div>
  )
}

export default Message
