'use client';
import React from 'react';
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";

const loginForm = () => {
  return (
    <div className='login-bg'>
      <div className="">
        {/* <img src="/login-bg.jpg" alt="" /> */}
        <div className="wrapper">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon' />
            </div>

            <div className="input-box">
              <input type="password" placeholder='Password' required /><FaLock className='icon' />
            </div>

            <div className="remember-forgot">
              <label><input type="checkbox" />Remember Me</label>
              <a href="#">Forget Password</a>
            </div>

            <button type='submit'>Login</button>

            <div className="register-link">
              <p>Don't have a account <a href="#">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default loginForm