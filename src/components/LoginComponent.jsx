import React, { useState } from 'react'
import { LoginAPI, RegisterAPI } from '../api/AuthAPI'
import '../Sass/LoginComponent.scss'

export default function LoginComponent() {
  const [credentials, setCredentials] = useState()
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password)
      // let res = RegisterAPI(credentials.email, credentials.password)
      console.log(res?.user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
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
      <button onClick={login} className="login-btn">
        Log in to LinkedIn
      </button>
      {/* {console.log(credentials.email, credentials.password)} */}
    </div>
  )
}
