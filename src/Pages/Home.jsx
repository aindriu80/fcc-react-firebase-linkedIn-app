import NavbarComponent from '../components/NavbarComponent'
import googleSignIn from '../assets/googleSignIn.svg'
import homeDesk from '../assets/homeDesk.svg'
import '../Sass/Home.scss'

function Home() {
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password)
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
                className="common-inputs"
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
                className="common-inputs"
                placeholder=""></input>
            </div>
            <div className="forgot-password">Forgot Password?</div>
            <div className="alternative-signIn-container">
              <button onClick={login} className="login-btn">
                Sign in
              </button>
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
                New to LinkedIn? Join now
              </button>
            </div>
          </section>
        </div>
        <div className="main-top-right-content">
          <img src={homeDesk} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
