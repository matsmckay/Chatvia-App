import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

// pages
import Profile from './pages/Profile'
import Chats from './pages/Chats'
import GroupChats from './pages/GroupChats'
import Contacts from './pages/Contacts'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>ChatVia</h1>
          <h2>
            <Link to='/'>Profile</Link>
          </h2>
          <h2>
            <NavLink to='chats'>Chats</NavLink>
          </h2>
          <h2>
            <NavLink to='groupchats'>Group Chats</NavLink>
          </h2>
          <h2>
            <NavLink to='contacts'>Contacts</NavLink>
          </h2>
          <h2>
            <NavLink to='settings'>Settings</NavLink>
          </h2>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Profile />} />
          <Route path='chats' element={<Chats />} />
          <Route path='groupchats' element={<GroupChats />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
        <p>Chat component</p>
      </main>
    </BrowserRouter>
  )
}

export default App
