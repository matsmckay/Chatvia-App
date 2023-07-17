import { NavLink, Outlet } from 'react-router-dom'
import UserAvailability from '../components/UserAvailability'

const SettingsLayout = () => {
  return (
    <div className='settings-layout'>
      <h2>Settings</h2>
      <UserAvailability />
      <nav>
        <NavLink to='personalInfo'>Personal Info</NavLink>
        <NavLink to='privacy'>Privacy</NavLink>
        <NavLink to='security'>Security</NavLink>
        <NavLink to='help'>Help</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default SettingsLayout
