import React from 'react'

import '../Sass/SidebarComponent.scss'

const MyNetworkSidebar = () => {
  return (
    <>
      <div className="sidebar-main">
        <img className="profile-background-sidebar" />
        <div className="sidebar-content">
          <div className="sidebar-user-details">Manage my network</div>
        </div>
        <hr className="hr-line" />
        <div className="profile-connections">
          <div className="profile-connections-title"></div>
          <div className="manage-my-network-items">
            <a href="#"> Connections </a>
            <a href="#"> Contacts </a>
            <a href="#">Following & Followers </a>
            <a href="#">Groups </a>
            <a href="#"> Events </a>
            <a href="#">Pages </a>
            <a href="#">Newsletter </a>
            <a href="#"> Hashtags </a>
          </div>
          <hr className="hr-line" />
          <div className="profile-connections-title">Grow your network</div>
          <div className="app-aware-insights"></div>
          <hr className="hr-line" />
          <div className="sidebar-footer">
            <a href="#">About</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyNetworkSidebar
