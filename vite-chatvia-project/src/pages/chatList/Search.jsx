import chatImg from '../../assets/users/avatar-2.jpg'

const Search = () => {
  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='Search messages or users' />
      </div>
      <div className='user-chat'>
        <img src={chatImg} alt='' />
        <div className='user-chat-info'>
          <span>Patrick Hendricks</span>
        </div>
      </div>
    </div>
  )
}

export default Search
