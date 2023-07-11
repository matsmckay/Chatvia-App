import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

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

// pages
import Profile from './pages/Profile'
import Chats from './pages/Chats'
import GroupChats from './pages/GroupChats'
import Contacts from './pages/Contacts'
import Settings from './pages/Settings'
import DarkMode from './pages/DarkMode'

function App() {
  return (
    <div className='chat-container'>
      <BrowserRouter>
        <header>
          <nav className='nav-container'>
            <h1 className='nav-top'>ChatVia</h1>
            <div className='navLink-container'>
              <h2>
                <NavLink to='/'>
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </h2>
              <h2>
                <NavLink to='chats'>
                  <FontAwesomeIcon icon={faCommentDots} />
                </NavLink>
              </h2>
              <h2>
                <NavLink to='groupchats'>
                  <FontAwesomeIcon icon={faUserGroup} />
                </NavLink>
              </h2>
              <h2>
                <NavLink to='contacts'>
                  <FontAwesomeIcon icon={faAddressBook} />
                </NavLink>
              </h2>
              <h2>
                <NavLink to='settings'>
                  <FontAwesomeIcon icon={faGear} />
                </NavLink>
              </h2>
            </div>
            <div className='nav-bottom'>
              <h2>
                <NavLink to='darkmode'>
                  <FontAwesomeIcon icon={faCircleHalfStroke} />
                </NavLink>
              </h2>
              <h2>
                <NavLink to='/'>Profile (photo)</NavLink>
              </h2>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Profile />} />
            <Route path='chats' element={<Chats />} />
            <Route path='groupchats' element={<GroupChats />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='settings' element={<Settings />} />
            <Route path='darkmode' element={<DarkMode />} />
            <Route path='profile' element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>
      <div>
        <p>Chat component</p>
      </div>
    </div>
  )
}

export default App
