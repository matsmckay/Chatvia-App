import { NavLink, Outlet } from 'react-router-dom'

const SettingsLayout = () => {
  return (
    <div className='settings-layout'>
      <h1>Settings</h1>
      <p>Image of user</p>
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
