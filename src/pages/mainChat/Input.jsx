import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

const Input = ({ handleSubmit, text, setText, setImg }) => {
  return (
    <form className='userInput' onSubmit={handleSubmit}>
      <div className='send'>
        <input
          onChange={(e) => setText(e.target.value)}
          type='text'
          placeholder='Enter Message...'
          value={text}
        />
      </div>
      <label htmlFor='img'>
        <FontAwesomeIcon icon={faPaperclip} />
      </label>
      <input
        onChange={(e) => setImg(e.target.files[0])}
        type='file'
        id='img'
        accept='image/*'
        style={{ display: 'none' }}
      />
      <div>
        <button className='btn'>Send</button>
      </div>
    </form>
  )
}

export default Input
