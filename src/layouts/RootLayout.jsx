import { useState, useEffect } from 'react'
import { storage, db, auth } from '../firebase'
import { getDownloadURL, ref } from 'firebase/storage'
import { getDoc, doc } from 'firebase/firestore'
import { NavLink, Link, Outlet } from 'react-router-dom'

import anonDefaultPic from '../assets/users/anon-photo-chat-app.jpg'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faUserGroup,
  faAddressBook,
  faCircleHalfStroke,
  faGear,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons'
import MainChatLayout from './MainChatLayout'

const RootLayout = () => {
  const [avatarURL, setAvatarURL] = useState('')

  useEffect(() => {
    const fetchAvatarURL = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid))
        if (userDoc.exists()) {
          const user = userDoc.data()
          if (user.avatarPath) {
            const url = await getDownloadURL(ref(storage, user.avatarPath))
            setAvatarURL(url)
          }
        }
      } catch (error) {
        console.error('Error fetching avatar URL:', error)
      }
    }

    fetchAvatarURL()
  }, []) // Fetch avatar URL once on component mount

  console.log(avatarURL)
  return (
    <div className='root-layout'>
      <div className='container'>
        <div className='menu-container'>
          <nav className='nav-container'>
            <div>
              <h1>
                <Link to='home'>CV</Link>
              </h1>
            </div>
            <ul className='navLink-container'>
              <li>
                <NavLink to='profile'>
                  <FontAwesomeIcon icon={faUser} alt='User' />
                </NavLink>
              </li>
              <li>
                <NavLink to='chats'>
                  <FontAwesomeIcon icon={faCommentDots} alt='Chats' />
                </NavLink>
              </li>
              <li>
                <NavLink to='groupchats'>
                  <FontAwesomeIcon icon={faUserGroup} alt='Group Chats' />
                </NavLink>
              </li>
              <li>
                <NavLink to='contacts'>
                  <FontAwesomeIcon icon={faAddressBook} alt='Contact List' />
                </NavLink>
              </li>
              <li>
                <NavLink to='settings'>
                  <FontAwesomeIcon icon={faGear} alt='Settings' />
                </NavLink>
              </li>
            </ul>
            <ul className='nav-bottom'>
              <li>
                <NavLink to='darkmode'>
                  <FontAwesomeIcon
                    icon={faCircleHalfStroke}
                    alt='Dark Mode button'
                  />
                </NavLink>
              </li>
              <li className='current-user'>
                <NavLink to='about'>
                  <img
                    src={avatarURL || anonDefaultPic}
                    alt='Pic of current User'
                  />
                </NavLink>
              </li>
            </ul>
          </nav>
          <main className='page-components'>
            <Outlet />
          </main>
        </div>
        {/* END .menu-container */}
        <section className='main-chat'>
          <MainChatLayout />
        </section>
      </div>
      {/* END .container */}
    </div>
    // END .root-layout
  )
}

export default RootLayout
