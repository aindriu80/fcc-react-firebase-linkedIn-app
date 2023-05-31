import React, { useState } from 'react'
import { LoginAPI } from '../api/AuthAPI'
import LinkedInLogo from '../assets/LinkedInLogo.svg'
import googleSignIn from '../assets/googleSignIn.svg'
import appleSignIn from '../assets/appleSignIn.svg'
import '../Sass/LoginComponent.scss'
import Footer from './FooterComponent'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
export default function LoginComponent() {
  const [credentials, setCredentials] = useState()

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password)
      toast.success('Successfully logged in to LinkedIn')
      localStorage.setItem('userEmail', res.user.email)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <header className="tm">
        <div className="login-logo-wrapper">
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
        <h1 className="login-heading">Sign In</h1>
        <p className="login-sub-heading">
          Stay updated on your professional world
        </p>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="login-inputs"
            placeholder="Email or Password"></input>

          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="login-inputs"
            placeholder="Password"></input>
        </div>
        <div className="login-forgot-password">Forgot Password?</div>
        <div className="login-alternative-signIn-container">
          <button onClick={login} className="login-btn">
            Sign in
          </button>
          <div className="login-text-with-line">
            <div className="line"></div>
            <div className="text">Or</div>
            <div className="line"></div>
          </div>
          <button className="login-alternative-signIn-btn">
            <img src={googleSignIn} />
            Sign in with Google
          </button>
          <button className="login-alternative-signIn-btn">
            <img src={appleSignIn} />
            Sign in with Apple
          </button>
        </div>
      </section>
      <div className="login-join-now">
        New to LinkedIn? <a href="/register"> Join now</a>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  )
}
