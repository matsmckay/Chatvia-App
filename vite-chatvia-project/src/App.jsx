import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from 'react-router-dom'

// pages
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Chats from './pages/Chats'
import GroupChats from './pages/GroupChats'
import Contacts from './pages/Contacts'
import Settings from './pages/Settings'
import DarkMode from './pages/DarkMode'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='chats' element={<Chats />} />
          <Route path='groupchats' element={<GroupChats />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='settings' element={<Settings />} />
          <Route path='darkmode' element={<DarkMode />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
