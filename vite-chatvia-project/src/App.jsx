import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

// pages
import Profile from './pages/Profile'
import Chats from './pages/Chats'
import GroupChats from './pages/GroupChats'
import Contacts from './pages/Contacts'
import Settings from './pages/Settings'
import DarkMode from './pages/DarkMode'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
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
              <NavLink to='chats'>Chats</NavLink>
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
              <NavLink to='settings'>Settings</NavLink>
            </h2>
          </div>
          <div className='nav-bottom'>
            <h2>
              <NavLink to='darkmode'>DarkMode</NavLink>
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
        <p>Chat component</p>
      </main>
    </BrowserRouter>
  )
}

export default App
