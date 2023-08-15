import chatContactPic from '../assets/users/avatar-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faPhone,
  faVideo,
  faUser,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedChatUser } from '../features/cart/cartSlice'

const MainChatHeader = () => {
  const dispatch = useDispatch()
  const selectedChatUser = useSelector((state) => state.cart.selectedChatUser)
  // const handleBackClick = () => {
  //   dispatch(setSelectedChatUser(null))
  // }

  return (
    <header className='chat-info'>
      <div className='contact-content'>
        <div className='contact-img'>
          <img
            src={selectedChatUser.avatar || chatContactPic}
            alt='Pic of user you are chatting with'
          />
        </div>
        <div className='contact-info'>
          <h4>
            {selectedChatUser ? selectedChatUser.name : 'No User Selected'}
          </h4>

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
  )
}

export default MainChatHeader
