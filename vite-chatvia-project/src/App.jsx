import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

// pages
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import ChatListLayout from './layouts/ChatListLayout'
import GroupChats from './pages/GroupChats'
import Contacts from './pages/Contacts'
import DarkMode from './pages/DarkMode'
import Profile from './pages/Profile'
import RootLayout from './layouts/RootLayout'
import SettingsLayout from './layouts/SettingsLayout'
import Help from './pages/settings/Help'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='chats' element={<ChatListLayout />} />
        <Route path='groupchats' element={<GroupChats />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='settings' element={<SettingsLayout />}>
          <Route path='personalInfo' />
          <Route path='privacy' />
          <Route path='security' />
          <Route path='help' element={<Help />} />
        </Route>
        <Route path='darkmode' element={<DarkMode />} />
        <Route path='profile' element={<Profile />} />

        <Route path='*' element={<NotFound />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
