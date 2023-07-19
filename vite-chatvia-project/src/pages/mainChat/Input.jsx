import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faFileImage } from '@fortawesome/free-solid-svg-icons'

const Input = () => {
  return (
    <div className='userInput'>
      <input type='text' placeholder='Enter Message...' />
      <div className='send'>
        <FontAwesomeIcon icon={faPaperclip} />
        <input type='file' style={{ display: 'none' }} />
        <label htmlFor='file'>
          <FontAwesomeIcon icon={faFileImage} />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
