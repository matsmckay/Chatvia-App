import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='welcome-page'>
      <h2>Welcome to the world's greatest chat app... ChatVIA!</h2>

      <h3>Here are some options to help you get started:</h3>
      <ul>
        <li>
          Go to
          <button className='welcome-btn btn'>
            <Link to='/chats'>Chats</Link>
          </button>
          to begin searching and chatting with your follow ChatVIA peeps!
        </li>
        <li>
          Go to
          <button className='welcome-btn btn'>
            <Link to='/profile'>Profile</Link>
          </button>
          to edit your information
        </li>
        <li>
          Go to{' '}
          <button className='welcome-btn btn'>
            <Link to='/home'>Contacts</Link>
          </button>{' '}
          to see which users are registered
        </li>
      </ul>
    </div>
  )
}

export default Welcome
