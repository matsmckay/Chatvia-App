import currentUserPic from '../assets/users/avatar-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const UserAvailability = () => {
  const [img, setImg] = useState('')
  return (
    <section>
      <div className='availability-container'>
        <div className='profile-img-container'>
          <img
            src={currentUserPic}
            alt='Profile pic or avatar of current user'
          />
          <div className='overlay'>
            <div>
              <label htmlFor='photo'>
                <FontAwesomeIcon icon={faCameraRetro} />
              </label>
              <input
                type='file'
                accept='image/*'
                id='photo'
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className='profile-text-container'>
          <p>user name</p>
          <p>user availability</p>
        </div>
      </div>
    </section>
  )
}

export default UserAvailability
