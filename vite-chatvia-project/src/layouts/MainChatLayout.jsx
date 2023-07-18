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
      <div className='chat-info'>
        <div className='contactContent'>
          <img src={chatContactPic} alt='Pic of user you are chatting with' />
          <span>Doris Brown</span>
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
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default MainChatLayout
