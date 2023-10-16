import { useState, useRef, useEffect } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import chatVia from '../assets/logo-light.png'

const Register = () => {
  const [data, setData] = useState({
    email: '',
    name: '',
    password: '',
    error: null,
    loading: false,
  })

  const registerInput = useRef('')
  useEffect(() => {
    registerInput.current.focus()
  }, [])

  const navigate = useNavigate()

  const { name, email, password, error, loading } = data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setData({ ...data, error: null, loading: true })
    // const timestamp = Timestamp.fromDate(newDate())
    // const createdAt = {
    //   seconds: timestamp.seconds,
    //   nanoseconds: timestamp.nanoseconds,
    // }
    if (!name || !email || !password) {
      setData({ ...data, error: 'All fields are required' })
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        // createdAt,
        isOnline: true,
      })
      setData({
        name: '',
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
      <div className='logo'>
        <img src={chatVia} alt='ChatVia logo and name' />
      </div>
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
            required
            ref={registerInput}
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
            required
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
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
        <div className='terms'>
          <p>By registering you agree to the Chatvia</p>
          <p>Terms of Use</p>
        </div>
      </form>
      <div>
        Already have an account? <Link to='/login'>Sign In</Link>
      </div>
      <p>Copyright blah blah</p>
    </div>
  )
}

export default Register
