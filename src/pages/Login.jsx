import { useState, useRef, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import { updateDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import chatVia from '../assets/logo-light.png'
const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    error: null,
    loading: false,
  })
  const loginInput = useRef('')
  useEffect(() => {
    loginInput.current.focus()
  }, [])
  const navigate = useNavigate()

  const { email, password, error, loading } = data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const getCustomErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'Invalid email address. Please check and try again.'
      case 'auth/user-disabled':
        return 'Your account has been disabled. Please contact support.'
      case 'auth/user-not-found':
        return 'User not found. Please check your credentials.'
      case 'auth/wrong-password':
        return 'Invalid password. Please check and try again.'
      // Add more cases for other error codes as needed
      default:
        return 'An error occurred. Please try again later.'
    }
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
      navigate('/chats')
    } catch (err) {
      setData({
        ...data,
        error: getCustomErrorMessage(err.code),
        loading: false,
      })
      console.log(err)
    }
  }

  return (
    <div className='registration-container'>
      <div className='logo'>
        <img src={chatVia} alt='Chatvia Logo and name' />
      </div>
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
            required
            ref={loginInput}
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
            required
          />
        </div>
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
      <div>
        Need to register an account? <Link to='/register'>Sign up!</Link>
      </div>
      <p>Copyright blah blah</p>
    </div>
  )
}

export default Login
