import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Register = () => {
  const [data, setData] = useState({
    email: '',
    name: '',
    password: '',
    error: null,
    loading: false,
  })

  const { name, email, password, error, loading } = data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setData({ ...data, error: null, loading: true })
    if (!name || !email || !password) {
      setData({ ...data, error: 'All fields are required' })
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      console.log(result.user)
    } catch (error) {}
  }

  return (
    <div className='registration-container'>
      <div className='logo'>Chatvia logo</div>
      <div className='register-header '>
        <h1>Sign up</h1>
        <h3>Get your Chatvia account now</h3>
      </div>
      <form
        id='registration-form'
        aria-label='Registration Form'
        onSubmit={handleSubmit}
      >
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={handleChange}
            aria-required='true'
            aria-label='Enter your desired email address'
            // required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='name'
            value={name}
            onChange={handleChange}
            aria-required='true'
            aria-label='Enter your desired username'
            // required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handleChange}
            aria-required='true'
            aria-label='Enter your desired password'
            // required
          />
        </div>
        {/* <div className='form-group'>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            type='text'
            id='confirm-password'
            name='confirm-password'
            value={password}
            aria-required='true'
            aria-label='Confirm your password'
            required
          />
        </div> */}
        {error ? <p className='error'>{error}</p> : null}
        <div className='btn-container'>
          <button className='btn'>Sign up</button>
        </div>
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
