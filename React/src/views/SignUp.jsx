import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const onSubmit = (ev) => {
    ev.preventDefault()
  }
  return (
    <div className="login-signup-form animated fadeInDown">
    <div className="form">
      <form onSubmit={onSubmit}>
        <h1 className="title">
          Sign Up for free
        </h1>
        <input type="email" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="btn btn-block">Signup</button>
        <p className='message'>
          Already Registered? <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  </div>
  )
}

export default SignUp
