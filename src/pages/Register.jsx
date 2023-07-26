import React from 'react'

const Register = () => {
  return (
    <div className='registration-container'>
      <div className='logo'>Chatvia logo</div>
      <div className='register-header'>
        <h1>Sign up</h1>
        <h3>Get your Chatvia account now</h3>
      </div>
      <form id='registration-form' aria-label='Registration Form'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            aria-required='true'
            aria-label='Enter your desired email address'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            aria-required='true'
            aria-label='Enter your desired username'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            id='password'
            name='password'
            aria-required='true'
            aria-label='Enter your desired password'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirm-password'>Password</label>
          <input
            type='text'
            id='confirm-password'
            name='confirm-password'
            aria-required='true'
            aria-label='Confirm your password'
            required
          />
        </div>
        <button className='submit'>Sign up</button>
        <div className='terms'>
          <p>By registering you agree to the Chatvia</p>
          <p>Terms of Use</p>
        </div>
      </form>
      <div>Already have an account? Signin</div>
      <p>Copyright blah blah</p>
    </div>
  )
}

export default Register
