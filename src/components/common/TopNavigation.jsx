import React, { useState, useMemo } from 'react'
import linkedInLogo from '../../assets/top-nav.svg'
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import FeedSearch from '../common/FeedSearch'
import ProfilePopUp from '../common/ProfilePopUp'
import DownArrow from '../../assets/downArrow.svg'
import '../../Sass/FeedComponent.scss'
import { getCurrentUser } from '../../api/FirestoreAPI'

const TopNavigation = () => {
  const [currentUser, setCurrentUser] = useState({})
  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])
  const [popUpVisible, setPopUpVisible] = useState(false)
  const navigate = useNavigate()

  const goToRoute = (route) => {
    navigate(route)
  }

  const logout = () => {
    auth.signOut()
  }

  const displayPopUp = () => {
    setPopUpVisible(!popUpVisible)
  }

  return (
    <>
      {popUpVisible ? (
        <div className="popup-position">
          <ProfilePopUp />
        </div>
      ) : (
        <p></p>
      )}
      <div className="global-nav">
        <div className="topbar-main">
          <img
            className="feedLinkedInLogo"
            src={linkedInLogo}
            alt="LinkedIn Logo"
          />
          <FeedSearch />

          <div className="global-nav-feed">
            <div className="Navbar__Link">
              <AiOutlineHome
                size={30}
                className="react-icon"
                onClick={() => goToRoute('/')}
              />
              <div className="Navbar__Text">Home</div>
            </div>

            <div className="Navbar__Link">
              <AiOutlineUserSwitch
                size={30}
                className="react-icon"
                onClick={() => goToRoute('/profile')}
              />
              <div className="Navbar__Text">My Network</div>
            </div>
            <div className="Navbar__Link">
              <BsBriefcase size={30} className="react-icon" />
              <div className="Navbar__Text">My Network</div>
            </div>

            <div className="Navbar__Link">
              <AiOutlineSearch size={30} className="react-icon" />
              <div className="Navbar__Text">Jobs</div>
            </div>
            <div className="Navbar__Link">
              <AiOutlineMessage size={30} className="react-icon" />
              <div className="Navbar__Text">Messaging</div>
            </div>
            <div className="Navbar__Link">
              <AiOutlineBell size={30} className="react-icon" />
              <div className="Navbar__Text">Notifications</div>
            </div>
            <div className="Navbar__Link">
              <BsPersonCircle
                size={30}
                className="user-logo"
                onClick={displayPopUp}
              />
              <div className="Navbar__Text">
                Me <img src={DownArrow} />
              </div>
            </div>

            <div className="Navbar__Link">
              <TbGridDots size={30} className="user-logo" />
              <div className="Navbar__Text">For Business</div>
            </div>

            <div className="Navbar__Link">
              <div className="Navbar__Text">Retry Premium Free</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNavigation
