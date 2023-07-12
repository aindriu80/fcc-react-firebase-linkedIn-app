import React, { useState, useEffect } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import googleSignIn from '../assets/googleSignIn.svg'
import { onAuthStateChanged } from 'firebase/auth'
import homeDesk from '../assets/homeDesk.svg'
import '../Sass/Home.scss'
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader/Loader'
import { LoginAPI, RegisterAPI } from '../api/AuthAPI'

export default function Home() {
  const [credentials, setCredentials] = useState()
  const [loading, setLoading] = useState(true)
  let navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate('/feed')
      } else {
        setLoading(false)
      }
    })
  }, [])

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password)
      localStorage.setItem('userEmail', res.user.email)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavbarComponent />

      <div className="main-content">
        <div className="main-top-left-content">
          <h1 className="welcome-text">
            Welcome to your professional community
          </h1>
          <section className="main-left-login-content">
            <div className="home-inputs">
              Email
              <input
                onChange={(event) =>
                  setCredentials({ ...credentials, email: event.target.value })
                }
                type="email"
                className=" input__input"
                placeholder=""></input>
              Password
              <input
                onChange={(event) =>
                  setCredentials({
                    ...credentials,
                    password: event.target.value,
                  })
                }
                type="password"
                className=" input__input"
                placeholder=""></input>
            </div>
            <div className="forgot-password">Forgot Password?</div>
            <button onClick={login} className="home-login-btn">
              Sign In
            </button>
            <div className="login-text-with-line">
              <div className="line"></div>
              <div className="text">Or</div>
              <div className="line"></div>
            </div>
            <button className="home-login-google-btn ">
              <img src={googleSignIn} />
              Sign in with Google
            </button>
            <button className="home-new-to-site-btn">
              New to LinkedIn? Join now
            </button>
          </section>
        </div>
        <div className="main-top-right-content">
          <img src={homeDesk} alt="" />
        </div>
      </div>
    </>
  )
}
