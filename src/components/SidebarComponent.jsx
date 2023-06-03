import React, { useState, useMemo } from 'react'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'
import profileBackground from '../assets/profileBackground.svg'
import '../Sass/SidebarComponent.scss'

const SidebarComponent = ({ currentUser }) => {
  return (
    <>
      <div className="sidebar-main">
        <div className="sidebar-content">
          <img className="profile-background-sidebar" src={profileBackground} />
          <BsPersonCircle size={70} className="user-logo-sidebar" />
          <div className="sidebar-user-details">
            {currentUser.name} {currentUser.lastName}
          </div>
          {currentUser.headline}
        </div>
        <div className="profile-connections">
          <p>
            <div className="profile-connections-title">
              Your Connections &nbsp;
              <a href="#">500+</a>
            </div>
          </p>
          <div className="profile-connections-growth">Grow your Network</div>
        </div>
      </div>
    </>
  )
}

export default SidebarComponent
