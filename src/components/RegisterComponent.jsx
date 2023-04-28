import React, { useState } from 'react'
import { LoginAPI, RegisterAPI } from '../api/AuthAPI'
import LinkedInLogo from '../assets/LinkedInLogo.svg'
import googleSignIn from '../assets/googleSignIn.svg'
import '../Sass/RegisterComponent.scss'
import { Link } from 'react-router-dom'
import Footer from './FooterComponent'

export default function LoginComponent() {
  const [credentials, setCredentials] = useState()

  const register = async () => {
    try {
      let res = RegisterAPI(credentials.email, credentials.password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <header>
        <div className="register-wrapper">
          <Link to="/">
            <img
              src={LinkedInLogo}
              alt="LinkedInLogo"
              className="linkedInLogo"
            />
          </Link>
        </div>
      </header>

      <h3 className="register-heading">
        Make the most of your professional life
      </h3>

      <section className="register-content">
        <div className="auth-inputs">
          <label className="input-label">Email</label>
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="register-inputs"
            placeholder=""></input>
          <label className="input-label">Password (6 or more characters)</label>
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="register-inputs"
            placeholder=""></input>
        </div>
        <div className="register-agreement">
          By clicking Agree & Join, you agree to the LinkedIn User Agreement,
          Privacy Policy, and Cookie Policy.{' '}
        </div>
        <div className="register-alternative-signIn-container">
          <button onClick={register} className="register-btn">
            Agree & Join
          </button>

          <div className="text-with-line">
            <div className="line"></div>
            <div className="text">Or</div>
            <div className="line"></div>
          </div>
          <button className="register-alternative-signIn-btn">
            <img src={googleSignIn} />
            Sign in with Google
          </button>
        </div>
      </section>

      <div className="already-a-member">
        Already on LinkedIn? <a href="/login"> Sign in</a>
      </div>
      <div className="page-for-business">
        Looking to create a page for a business? <a href="/"> Get help</a>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  )
}
