import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-top'>
        <div className='navLink-about'>
          <NavLink to='about'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 100 100'
              width='120'
              height='120'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M4.929 19.071A9.969 9.969 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929zM11 6v12h2V6h-2zM7 9v6h2V9H7zm8 0v6h2V9h-2z'
                fill='rgba(114,105,239,1)'
              />
            </svg>
          </NavLink>
        </div>
      </div>
      <div className='navLink-container'>
        <h2>
          <NavLink to='/'>
            <FontAwesomeIcon icon={faUser} alt='User' />
          </NavLink>
        </h2>
        <h2>
          <NavLink to='chats'>
            <FontAwesomeIcon icon={faCommentDots} alt='Chats' />
          </NavLink>
        </h2>
        <h2>
          <NavLink to='groupchats'>
            <FontAwesomeIcon icon={faUserGroup} alt='Group Chats' />
          </NavLink>
        </h2>
        <h2>
          <NavLink to='contacts'>
            <FontAwesomeIcon icon={faAddressBook} alt='Contact List' />
          </NavLink>
        </h2>
        <h2>
          <NavLink to='settings'>
            <FontAwesomeIcon icon={faGear} alt='Settings' />
          </NavLink>
        </h2>
      </div>
      <div className='nav-bottom'>
        <h2>
          <NavLink to='darkmode'>
            <FontAwesomeIcon icon={faCircleHalfStroke} alt='Dark Mode button' />
          </NavLink>
        </h2>
        <h2>
          <NavLink to='/'>
            <img src={pic} alt='' />
          </NavLink>
        </h2>
      </div>
    </nav>
  )
}

export default Navbar
