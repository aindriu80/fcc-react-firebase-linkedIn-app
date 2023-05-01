import React from 'react'
import { auth } from '../../firebaseConfig'
import linkedInLogo from '../assets/LinkedInLogo.svg'
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from 'react-icons/ai'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'
import '../Sass/FeedComponent.scss'

export default function FeedComponent() {
  const logout = () => {
    auth.signOut()
  }
  return (
    <>
      <div className="topbar-main">
        <img
          className="feedLinkedInLogo"
          src={linkedInLogo}
          alt="LinkedIn Logo"
        />
        <div className="react-icons">
          <AiOutlineHome size={30} className="react-icon" />
          <AiOutlineUserSwitch size={30} className="react-icon" />
          <BsBriefcase size={30} className="react-icon" />
          <AiOutlineSearch size={30} className="react-icon" />
          <AiOutlineMessage size={30} className="react-icon" />
          <AiOutlineBell size={30} className="react-icon" />
          <BsPersonCircle size={30} className="user-logo" />
        </div>
      </div>

      <h2>Feed Component</h2>
      <button onClick={logout} className="feed-logout-btn">
        Logout
      </button>
    </>
  )
}
