import { NavLink, Link, Outlet } from 'react-router-dom'

import currentUserPic from '../assets/users/avatar-1.jpg'

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
  return (
    <div className='root-layout'>
      <div className='container'>
        <div className='menu-container'>
          <nav className='nav-container'>
            <div>
              <h1>
                <Link to='/'>CV</Link>
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
                  <img src={currentUserPic} alt='' />
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
