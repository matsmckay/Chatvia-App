import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

const Input = ({ handleSubmit, text, setText }) => {
  return (
    <form className='userInput' onSubmit={handleSubmit}>
      <label htmlFor='img'>
        <FontAwesomeIcon icon={faPaperclip} />
      </label>
      <input
        type='file'
        id='img'
        accept='image/*'
        style={{ display: 'none' }}
      />
      <div className='send'>
        <input
          type='text'
          placeholder='Enter Message...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button className='btn'>Send</button>
      </div>
    </form>
  )
}

export default Input
