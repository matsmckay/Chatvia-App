import { useRef, useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns'
import chatContactPic from '../../assets/users/anon-photo-chat-app.jpg'

const Message = ({ msg, user1, selectedChatUser, avatarURL }) => {
  const scrollRef = useRef()
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msg])
  console.log(user1)
  return (
    <div
      className={`message-wrapper ${msg.from === user1.uid ? 'own' : ''}`}
      ref={scrollRef}
    >
      <div className='convo'>
        <p className={msg.from === user1.uid ? 'me' : 'friend'}>
          {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
          {msg.text}
          <br />
          <span>{formatDistanceToNow(msg.createdAt)}</span>
        </p>
        <p className='convo-name'>
          {msg.from === user1.uid
            ? user1.displayName
              ? user1.displayName
              : user1.email
            : selectedChatUser
            ? selectedChatUser.name
            : null}
        </p>
      </div>
      <img
        src={
          msg.from === user1.uid
            ? avatarURL
              ? avatarURL
              : chatContactPic
            : selectedChatUser.avatar
            ? selectedChatUser.avatar
            : chatContactPic
        }
        alt='NA'
      />
    </div>
  )
}

export default Message
