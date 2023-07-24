import chatContactPic from '../assets/users/avatar-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faPhone,
  faVideo,
  faUser,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons'
import Messages from '../pages/mainChat/Messages'
import Input from '../pages/mainChat/Input'

const MainChatLayout = () => {
  return (
    <div className='chat'>
      <header className='chat-info'>
        <div className='contact-content'>
          <div className='contact-img'>
            <img src={chatContactPic} alt='Pic of user you are chatting with' />
          </div>
          <div className='contact-info'>
            <h4>Doris Brown</h4>
            <span>online</span>
          </div>
        </div>
        <ul className='chat-icons'>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
          </li>
          <li>
            <FontAwesomeIcon icon={faVideo} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li>
            <FontAwesomeIcon icon={faEllipsis} />
          </li>
        </ul>
      </header>
      <Messages />
      <Input />
    </div>
  )
}

export default MainChatLayout
