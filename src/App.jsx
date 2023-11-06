// react-router-dom
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

// pages
import Register from './pages/Register'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
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

// src
import AuthProvider from './context/auth'
import PrivateRoute from './components/PrivateRoute'
import ChatList from './pages/chatList/ChatList'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route exact path='/' element={<PrivateRoute />}>
        <Route exact path='/' element={<RootLayout />}>
          <Route path='/' element={<Welcome />} />
          <Route path='welcome' element={<Welcome />} />
          <Route path='home' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='chats' element={<ChatListLayout />}>
            <Route index element={<ChatList />} />
          </Route>
          <Route path='groupchats' element={<GroupChats />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='settings' element={<SettingsLayout />}>
            <Route path='personalInfo' />
            <Route path='privacy' />
            <Route path='security' />
            <Route path='help' element={<Help />} />
          </Route>
          <Route path='darkmode' element={<DarkMode />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
