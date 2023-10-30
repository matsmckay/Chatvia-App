// import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Input = ({ handleSubmit, text, setText, setImg, msgInput }) => {
  const isTextEmptyOrWhitespace = text.trim() === ''
  console.log(msgInput)
  // const msgInput = useRef('')
  // useEffect(() => {
  //   msgInput.current.focus()
  // }, [])
  return (
    <form className='userInput' onSubmit={handleSubmit}>
      <div className='send'>
        <input
          onChange={(e) => setText(e.target.value)}
          type='text'
          placeholder='Enter Message...'
          value={text}
          required
          ref={msgInput}
        />
      </div>
      <div className='input-buttons'>
        <label htmlFor='emojis'>
          <FontAwesomeIcon icon={faFaceSmile} />
        </label>
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
          <button className='send-btn' disabled={isTextEmptyOrWhitespace}>
            Send
          </button>
        </div>
      </div>
    </form>
  )
}

export default Input
