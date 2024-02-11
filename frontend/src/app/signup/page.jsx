import React from 'react'
import { CSS } from './signup.css'

const SignUp = () => {
  return (
    <section>
        <div className="section-registration">
            <div className="container grid grid-two-cols">
                <div className="registration-image">
                    <img src="/images/register.png" alt="Trying to do registration" />
                </div>
                <div className="registration-form">
                  <h1 className="main-heading">Registration Form</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignUp




