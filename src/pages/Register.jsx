import React from 'react'

const Register = () => {
  return (
    <>
      <header>
        <div className='chat-via-logo'>ChatVia</div>
        <h1>Sign up</h1>
        <h2>Get your Chatvia account now</h2>
      </header>
      <main>
        <div className='email'>Email</div>
        <div className='user'>Username</div>
        <div className='password'>Password</div>
        <button>Sign up</button>
        <div className='terms'>
          By registering you agree to the Chatvia Terms of Use
        </div>
      </main>
      <footer>
        <h3>Already have an account? Sign in now!</h3>
        <h4>Copyright blah blah blah</h4>
      </footer>
    </>
  )
}

export default Register
