import React, { useState } from 'react'
import { LoginAPI, RegisterAPI } from '../api/AuthAPI'
import LinkedInLogo from '../assets/LinkedInLogo.svg'
import '../Sass/RegisterComponent.scss'
import { Link } from 'react-router-dom'

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
    <div className="login-wrapper">
      <Link to="/">
        <img src={LinkedInLogo} alt="LinkedInLogo" className="linkedInLogo" />
      </Link>
      <h3>LoginComponent</h3>
      <input
        onChange={(event) =>
          setCredentials({ ...credentials, email: event.target.value })
        }
        className="common-input"
        placeholder="Enter your email"></input>
      <input
        onChange={(event) =>
          setCredentials({ ...credentials, password: event.target.value })
        }
        className="common-input"
        placeholder="Enter your password"></input>
      <button onClick={register} className="login-btn">
        Agree & Join
      </button>
    </div>
  )
}
