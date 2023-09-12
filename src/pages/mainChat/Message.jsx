import { useRef, useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns'

const Message = ({ msg, user1 }) => {
  const scrollRef = useRef()
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msg])
  return (
    <div
      className={`message-wrapper ${msg.from === user1 ? 'own' : ''}`}
      ref={scrollRef}
    >
      <div className='message my-message'>
        <p>
          {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
          {msg.text}
          <br />
          <span>{formatDistanceToNow(msg.createdAt)}</span>
        </p>
      </div>
    </div>
  )
}

export default Message
