import React, { useState } from 'react'
import { LoginAPI, RegisterAPI } from '../api/AuthAPI'
import LinkedInLogo from '../assets/LinkedInLogo.svg'
import '../Sass/LoginComponent.scss'
import Footer from './Footer'

export default function LoginComponent() {
  const [credentials, setCredentials] = useState()

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <header>
        <div className="login-wrapper">
          <img src={LinkedInLogo} alt="LinkedInLogo" className="linkedInLogo" />
        </div>
      </header>
      <section className="login-content">
        <h1 className="heading">Sign In</h1>
        <p className="sub-heading">Stay updated on your professional world</p>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            className="common-input"
            placeholder="Email or Password"></input>

          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            className="common-input"
            placeholder="Password"></input>
        </div>
        Forgot Password?
        <button onClick={login} className="login-btn">
          Sign in
        </button>
        <div className="alternative-signin-container">
          or
          <button>Sign in with Google</button>
          <button>Sign in with Apple</button>
        </div>
        New to LinkedIn? Join now
      </section>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  )
}
