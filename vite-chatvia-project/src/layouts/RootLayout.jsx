import { NavLink, Link, Outlet } from 'react-router-dom'

import pic from '../assets/users/avatar-1.jpg'

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

const RootLayout = () => {
  return (
    <div className='RootLayout'>
      <header>
        <nav className='nav-container'>
          <div>
            <h1>
              <Link to='/'>chatvia</Link>
            </h1>
          </div>
          <ul className='navLink-container'>
            <li>
              <NavLink to='/about'>
                <FontAwesomeIcon icon={faUser} alt='User' />
              </NavLink>
            </li>
            <li>
              <NavLink to='chats'>
                <FontAwesomeIcon icon={faCommentDots} alt='Chats' />
              </NavLink>
            </li>
            <li>
              <NavLink to='/groupchats'>
                <FontAwesomeIcon icon={faUserGroup} alt='Group Chats' />
              </NavLink>
            </li>
            <li>
              <NavLink to='/contacts'>
                <FontAwesomeIcon icon={faAddressBook} alt='Contact List' />
              </NavLink>
            </li>
            <li>
              <NavLink to='/settings'>
                <FontAwesomeIcon icon={faGear} alt='Settings' />
              </NavLink>
            </li>
          </ul>
          <ul className='nav-bottom'>
            <li>
              <NavLink to='/darkmode'>
                <FontAwesomeIcon
                  icon={faCircleHalfStroke}
                  alt='Dark Mode button'
                />
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile'>
                <img
                  className='current-user'
                  src={pic}
                  alt='Image of the current user on ChatVia'
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <section className='main-chat'>
        <h1>main chat screen</h1>
      </section>
    </div>
  )
}

export default RootLayout
