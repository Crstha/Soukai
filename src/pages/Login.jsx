import React from 'react'

const Login = () => {
  return (
    <div id='login'>
        <h1>Login</h1>
        <input type="text" placeholder='Enter Username' />
        <input type="password" placeholder='Enter Your Password' />
        <button>Log In</button>
        <p>Don't Have Account?</p><a href='/'>Create an account.</a>
    </div>
  )
}

export default Login