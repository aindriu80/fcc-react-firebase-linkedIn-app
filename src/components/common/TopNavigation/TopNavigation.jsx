import React, { useState, useMemo } from 'react'
import linkedInLogo from '../../../assets/top-nav.svg'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
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
import FeedSearch from '../FeedSearch/FeedSearch'
import DownArrow from '../../../assets/downArrow.svg'
import { getCurrentUser } from '../../../api/FirestoreAPI'
import { onLogout } from '../../../api/AuthAPI'
import './TopNavigation.scss'

const TopNavigation = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [dropdownVisible, setDropdownVisible] = useState(false)
  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])
  const navigate = useNavigate()

  const goToRoute = (route) => {
    navigate(route)
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  return (
    <>
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
                size={25}
                className="react-icon"
                onClick={() => goToRoute('/')}
              />
              <div className="Navbar__Text">Home</div>
            </div>

            <div className="Navbar__Link">
              <AiOutlineUserSwitch
                size={25}
                className="react-icon"
                onClick={() => goToRoute('/profile')}
              />
              <div className="Navbar__Text">My Network</div>
            </div>
            <div className="Navbar__Link">
              <BsBriefcase size={25} className="react-icon" />
              <div className="Navbar__Text">My Network</div>
            </div>

            <div className="Navbar__Link">
              <AiOutlineSearch size={25} className="react-icon" />
              <div className="Navbar__Text">Jobs</div>
            </div>
            <div className="Navbar__Link">
              <AiOutlineMessage size={25} className="react-icon" />
              <div className="Navbar__Text">Messaging</div>
            </div>
            <div className="Navbar__Link">
              <AiOutlineBell size={25} className="react-icon" />
              <div className="Navbar__Text">Notifications</div>
            </div>
            <div className="dropdown">
              <BsPersonCircle
                size={20}
                className="user-logo"
                onClick={toggleDropdown}
              />
              <div
                className={`Navbar__Text ${dropdownVisible ? 'active' : ''}`}
                onClick={toggleDropdown}>
                Me <img src={DownArrow} onClick={toggleDropdown} />
              </div>
              {dropdownVisible && (
                <div className="dropdown-content">
                  <BsPersonCircle size={48} className="user-logo-post" />
                  {currentUser.name}&nbsp;
                  {currentUser.lastName}
                  <br />
                  <p>{currentUser.headline}</p>
                  <button href="/profile" className="dropdown-button">
                    View Profile
                  </button>
                  <h3>Account</h3>
                  <p>Retry Premium Free</p>
                  <p>Settings & Privacy</p>
                  <p>Help</p>
                  <p>Language</p>
                  <h3>Manage</h3>
                  <p>Posts & Activity</p>
                  <p>Job Posting Account</p>
                  <a onClick={onLogout}>Logout</a>
                </div>
              )}
            </div>
            <div className="Navbar__Link">
              <div className="Navbar__Text"></div>
            </div>

            <div className="Navbar__Link">
              <TbGridDots size={25} className="user-logo" />
              <div className="Navbar__Text">
                For Business
                <img src={DownArrow} />
              </div>
            </div>

            <div className="Navbar__Link">
              <div className="Navbar__Text__Premium">
                <a href="#">
                  Get Hired Faster <br />
                  Retry Premium Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNavigation
