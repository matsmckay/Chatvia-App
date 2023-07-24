import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className='search'>
      <div className='header'>
        <h2>Chats</h2>
      </div>
      <div className='search-form'>
        <input type='text' placeholder='Search messages or users' />
        <div className='search-icon'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  )
}

export default Search
