import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import { updateDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    error: null,
    loading: false,
  })

  const navigate = useNavigate()

  const { email, password, error, loading } = data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setData({ ...data, error: null, loading: true })
    if (!email || !password) {
      setData({ ...data, error: 'All fields are required' })
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      await updateDoc(doc(db, 'users', result.user.uid), {
        isOnline: true,
      })
      setData({
        email: '',
        password: '',
        error: null,
        loading: false,
      })
      navigate('/')
    } catch (err) {
      setData({ ...data, error: err.message, loading: false })
      console.log(err)
    }
  }

  return (
    <div className='registration-container'>
      <div className='logo'>Chatvia logo</div>
      <div className='register-header '>
        <h1>Login</h1>
        <h3>Log into your Chatvia account now</h3>
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
          <button className='btn' disabled={loading}>
            {loading ? 'Logging in ...' : 'Login'}
          </button>
        </div>
        {/* <div className='terms'>
          <p>By registering you agree to the Chatvia</p>
          <p>Terms of Use</p>
        </div> */}
      </form>
      <div>Need to register an account? Sign up!</div>
      <p>Copyright blah blah</p>
    </div>
  )
}

export default Login
