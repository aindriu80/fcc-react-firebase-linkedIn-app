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

const TopNavigation = ({ activeLink }) => {
  const [currentUser, setCurrentUser] = useState({})
  const [dropdownVisible, setDropdownVisible] = useState(false)
  // const [activeLink, setActiveLink] = useState('')

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
  console.log({ activeLink })
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
            <div className="Navbar__Link" onClick={() => goToRoute('/')}>
              <AiOutlineHome size={25} className="react-icon" />

              <div
                className={`Navbar__Link ${
                  activeLink === 'home' ? 'Navbar__Text_Active' : 'Navbar__Text'
                }`}>
                &nbsp; &nbsp; Home
              </div>
            </div>

            <div
              className="Navbar__Link"
              onClick={() => goToRoute('/mynetwork')}>
              <AiOutlineUserSwitch size={25} className="react-icon" />

              <div
                className={`Navbar__Link ${
                  activeLink === 'network'
                    ? 'Navbar__Text_Active'
                    : 'Navbar__Text'
                }`}>
                My Network
              </div>
            </div>

            <div className="Navbar__Link">
              <BsBriefcase size={25} className="react-icon" />
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

            <div className="dropdown-menu">
              {currentUser.imageLink ? (
                <img
                  src={currentUser.imageLink}
                  className="user-logo-top-nav"
                />
              ) : (
                <BsPersonCircle
                  size={20}
                  className="user-logo"
                  onClick={toggleDropdown}
                />
              )}
              <div
                className={`Navbar__Text ${dropdownVisible ? 'active' : ''}`}
                onClick={toggleDropdown}>
                Me <img src={DownArrow} onClick={toggleDropdown} />
              </div>

              {dropdownVisible && (
                <div className="dropdown-content">
                  <div className="header-dropdown">
                    {currentUser.imageLink ? (
                      <img
                        src={currentUser.imageLink}
                        className="drop-down-menu-profile-picture"
                      />
                    ) : (
                      <BsPersonCircle
                        size={48}
                        className="dropdown-user-logo-post"
                      />
                    )}
                    {currentUser.name}&nbsp;
                    {currentUser.lastName}
                    <br />
                    {currentUser.headline}
                    <p></p>
                  </div>

                  <button
                    onClick={() => goToRoute('/profile')}
                    className="dropdown-button">
                    View Profile
                  </button>
                  <hr className="hr-line" />
                  <div className="dropdown-content-header">Account</div>
                  <a href="#">Retry Premium Free</a>
                  <a href="#">Settings & Privacy</a>
                  <a href="#">Help</a>
                  <a href="#">Language</a>
                  <hr className="hr-line" />
                  <div className="dropdown-content-header">Manage</div>
                  <a href="#">Posts & Activity</a>
                  <a href="#">Job Posting Account</a>
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
