import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Chats from './pages/Chats'
import GroupChats from './pages/GroupChats'
import Contacts from './pages/Contacts'
import Settings from './pages/Settings'
import DarkMode from './pages/DarkMode'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/groupchats' element={<GroupChats />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/darkmode' element={<DarkMode />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
