import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='welcome-page'>
      <h2>Welcome to the world's greatest chat app... ChatVIA!</h2>

      <h3>Here are some options to help you get started:</h3>
      <ul>
        <li>
          Go to
          <Link to='/chats'>
            <button className='welcome-btn btn'>Chats</button>
          </Link>
          to begin searching and chatting with your follow ChatVIA peeps!
        </li>
        <li>
          Go to
          <Link to='/profile'>
            <button className='welcome-btn btn'>Profile</button>
          </Link>
          to edit your information
        </li>
        <li>
          Go to
          <Link to='/home'>
            {' '}
            <button className='welcome-btn btn'>Contacts</button>
          </Link>
          to see which users are registered
        </li>
      </ul>
    </div>
  )
}

export default Welcome
