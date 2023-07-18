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
        <span>Patricia Smith</span>
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
