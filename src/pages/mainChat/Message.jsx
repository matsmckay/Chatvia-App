import { formatDistanceToNow } from 'date-fns'

const Message = ({ msg }) => {
  return (
    <div className='chat-box'>
      <div className='message my-message'>
        <p>
          {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
          {msg.text}
          <br />
          <span>{formatDistanceToNow(msg.createdAt)}</span>
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
