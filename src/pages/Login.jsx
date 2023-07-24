import React from 'react'

const Login = () => {
  return (
    <>
      <header>
        <div className='chat-via-logo'>ChatVia</div>
        <h1>Sign in</h1>
        <h2>Sign in to continue to ChatVia</h2>
      </header>
      <main>
        <div className='user'>Username</div>
        <div className='password'>Password</div>
        <button>Sign in</button>
      </main>
      <footer>
        <h3>Don't have an account? Sign up now!</h3>
        <h4>Copyright blah blah blah</h4>
      </footer>
    </>
  )
}

export default Login
