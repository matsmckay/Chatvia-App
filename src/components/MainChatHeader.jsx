import { useState, useEffect } from 'react'
import chatContactPic from '../assets/users/anon-photo-chat-app.jpg'
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

const MainChatHeader = ({ handleBack }) => {
  console.log(handleBack)
  const dispatch = useDispatch()
  const selectedChatUser = useSelector((state) => state.cart.selectedChatUser)
  const handleBackClick = () => {
    dispatch(setSelectedChatUser(null))
  }
  const [imgSrc, setImgSrc] = useState(chatContactPic)

  useEffect(() => {
    if (selectedChatUser && selectedChatUser.avatar) {
      setImgSrc(selectedChatUser.avatar)
    } else {
      setImgSrc(chatContactPic)
    }
  }, [selectedChatUser])
  return (
    <header className='chat-info'>
      <div className='contact-content'>
        <button className='header-btn btn' onClick={handleBack}>
          Back
        </button>
        <div className='contact-img'>
          <img src={imgSrc} alt='User pic' />
        </div>
        <div className='contact-info'>
          <h4>
            {selectedChatUser ? selectedChatUser.name : 'No User Selected'}
          </h4>

          {selectedChatUser ? (
            <div
              className={`user-status ${
                selectedChatUser.isOnline ? 'online' : 'offline'
              }`}
            ></div>
          ) : (
            <p>No User Selected</p>
          )}
        </div>
      </div>
      <ul className='chat-icons'>
        <li>
          <FontAwesomeIcon icon={faPhone} />
        </li>
        <li>
          <FontAwesomeIcon icon={faVideo} />
        </li>
        {/* <li>
          <FontAwesomeIcon icon={faEllipsis} />
        </li> */}
      </ul>
    </header>
  )
}

export default MainChatHeader
