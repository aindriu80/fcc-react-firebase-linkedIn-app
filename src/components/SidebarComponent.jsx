import React, { useState, useMemo } from 'react'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'
import profileBackground from '../assets/profileBackground.svg'
import '../Sass/SidebarComponent.scss'

const SidebarComponent = ({ currentUser }) => {
  return (
    <>
      <div className="sidebar-main">
        <img className="profile-background-sidebar" src={profileBackground} />
        <div className="sidebar-content">
          <BsPersonCircle size={70} className="user-logo-sidebar" />
          <div className="sidebar-user-details">
            {currentUser.name} {currentUser.lastName}
          </div>
          {currentUser.headline}
        </div>
        <div className="profile-connections">
          <div className="profile-connections-title">
            Your Connections &nbsp;
            <a href="#">500+</a>
          </div>
          <div className="profile-connections-growth">Grow your Network</div>
        </div>
      </div>
    </>
  )
}

export default SidebarComponent
