import React, { useState } from 'react'
import { RegisterAPI } from '../api/AuthAPI'
import { postUserData } from '../api/FirestoreAPI'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getUniqueID } from '../components/helpers/getUniqueId'
import LinkedInLogo from '../assets/LinkedInLogo.svg'
import googleSignIn from '../assets/googleSignIn.svg'

import Footer from './FooterComponent'
import '../Sass/RegisterComponent.scss'

export default function RegisterComponent() {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({})

  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password)
      postUserData({
        userID: getUniqueID(),
        name: credentials.name,
        email: credentials.email,
      })
      localStorage.setItem('userEmail', res.user.email)
      navigate('/feed')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <main className="main">
          <header className="main__header">
            <div className="main__logo-container">
              <Link to="/">
                <img
                  src={LinkedInLogo}
                  alt="LinkedInLogo"
                  className="linkedInLogo"
                />
              </Link>

              <span aria-label="LinkedIn logo"></span>
            </div>
            <h1 className="main__subtitle">
              Make the most of your professional life
            </h1>
          </header>
          <div className="join-form-wrapper">
            <section className="join-form__form-body join-form__form-body--gsi">
              <div className="join-form__form-input-container join-form__form-input-container--is-section-1">
                <label className="input__label">Name</label>
                <input
                  onChange={(event) =>
                    setCredentials({
                      ...credentials,
                      name: event.target.value,
                    })
                  }
                  type="text"
                  className="input__input"
                  placeholder=""></input>

                <label className="input__label">Email</label>
                <input
                  onChange={(event) =>
                    setCredentials({
                      ...credentials,
                      email: event.target.value,
                    })
                  }
                  type="email"
                  className="input__input"
                  placeholder=""></input>
                <label className="input__label">
                  Password (6 or more characters)
                </label>
                <input
                  onChange={(event) =>
                    setCredentials({
                      ...credentials,
                      password: event.target.value,
                    })
                  }
                  type="password"
                  className="input__input"
                  placeholder=""></input>
              </div>
              <div className="join-form__form-body-agreement">
                By clicking Agree & Join, you agree to the LinkedIn User
                Agreement, Privacy Policy, and Cookie Policy.{' '}
              </div>

              <button
                onClick={register}
                className="join-form__form-body-submit-button">
                Agree & Join
              </button>

              <div className="third-party-join__container">
                <p className="third-party-join__reg-option">
                  <span className="third-party-join__line-wrapper">
                    <span className="third-party-join__line"></span>
                  </span>
                  <span className="third-party-join__content">
                    <span className="third-party-join__or-span">or</span>
                  </span>
                </p>
                <div className="gsi_452543_515733-wrapper">
                  <div className="third-party-join__gsi-btn-container">
                    <div className="">
                      <button>
                        <img src={googleSignIn} />
                        Sign in with Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="main__sign-in-container">
              Already on LinkedIn? <a href="/login"> Sign in</a>
            </div>
            <p className="page-help-link__text">
              Looking to create a page for a business? <a href="/"> Get help</a>
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
