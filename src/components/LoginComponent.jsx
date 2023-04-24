import React, { useState } from 'react'
import { LoginAPI, RegisterAPI } from '../api/AuthAPI'
import LinkedInLogo from '../assets/LinkedInLogo.svg'
import googleSignIn from '../assets/googleSignIn.svg'
import appleSignIn from '../assets/appleSignIn.svg'
import '../Sass/LoginComponent.scss'
import Footer from './FooterComponent'

import { Link } from 'react-router-dom'
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
          <Link to="/">
            <img
              src={LinkedInLogo}
              alt="LinkedInLogo"
              className="linkedInLogo"
            />
          </Link>
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
            type="email"
            className="common-inputs"
            placeholder="Email or Password"></input>

          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-inputs"
            placeholder="Password"></input>
        </div>
        <div className="forgot-password">Forgot Password?</div>
        <div className="alternative-signIn-container">
          <button onClick={login} className="login-btn">
            Sign in
          </button>
          {/* <span className="text-with-line">Or</span> */}
          <div className="text-with-line">
            <div className="line"></div>
            <div className="text">Or</div>
            <div className="line"></div>
          </div>
          <button className="alternative-signIn-btn">
            <img src={googleSignIn} />
            Sign in with Google
          </button>
          <button className="alternative-signIn-btn">
            <img src={appleSignIn} />
            Sign in with Apple
          </button>
        </div>
      </section>
      <div className="join-now">
        New to LinkedIn? <a href="/register"> Join now</a>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  )
}
