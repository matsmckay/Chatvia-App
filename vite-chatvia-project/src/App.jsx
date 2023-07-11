import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components

import Navbar from './components/Navbar'

// pages
import Profile from './pages/Profile'
import Chats from './pages/Chats'
import GroupChats from './pages/GroupChats'
import Contacts from './pages/Contacts'
import Settings from './pages/Settings'
import DarkMode from './pages/DarkMode'
import About from './pages/About'

function App() {
  return (
    <div className='chat-container'>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='about' element={<About />} />
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
