import React, { useState, useMemo } from 'react'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'
import '../Sass/SidebarComponent.scss'

const SidebarComponent = ({ currentUser }) => {
  return (
    <>
      <div className="sidebar-main">
        <div className="sidebar-content">
          <BsPersonCircle size={70} className="user-logo-post" />
          <div className="sidebar-user-details">{currentUser.name}</div>
          Job title
        </div>
      </div>
    </>
  )
}

export default SidebarComponent
