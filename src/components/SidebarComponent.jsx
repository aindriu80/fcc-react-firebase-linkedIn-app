import React, { useState, useMemo } from 'react'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'
import profileBackground from '../assets/profileBackground.svg'
import premium from '../assets/premium.svg'
import bookmark from '../assets/bookmark.svg'
import recentItems from '../assets/recentItems.svg'

import '../Sass/SidebarComponent.scss'

const SidebarComponent = ({ currentUser }) => {
  return (
    <>
      <div className="sidebar-main">
        <img className="profile-background-sidebar" src={profileBackground} />
        <div className="sidebar-content">
          {currentUser.imageLink ? (
            <img src={currentUser.imageLink} className="user-logo-sidebar" />
          ) : (
            <BsPersonCircle size={70} className="user-logo-sidebar" />
          )}
          <div className="sidebar-user-details">
            {currentUser.name} {currentUser.lastName}
          </div>
          <div className="sidebar-user-headline">{currentUser.headline}</div>
        </div>
        <hr className="hr-line" />
        <div className="profile-connections">
          <div className="profile-connections-title">
            Your Connections &nbsp;
            <a href="#" className="connection-number">
              500+
            </a>
          </div>
          <div className="profile-connections-growth">Grow your Network</div>
          <hr className="hr-line" />
          <div className="profile-connections-title">
            Access exclusive tools & insights
          </div>
          <div className="app-aware-insights">
            <img className="premium-aware" src={premium} />
            Get Hired Faster, Try Premium Free
          </div>
          <hr className="hr-line" />
          <div className="ember-view">
            <img className="ember-bookmark" src={bookmark} />
            My items
          </div>
        </div>
      </div>
      <div className="community-panel">
        <div className="community-panel-title">Recent</div>

        <div className="community-panel-interest">
          <img className="recent-items-img" src={recentItems} />
          <a href="#" className="community-panel-interest-links">
            zerotomastery.io
          </a>
        </div>
        <div className="community-panel-interest">
          <img className="recent-items-img" src={recentItems} />
          <a href="#" className="community-panel-interest-links">
            YLD.com Open Source - All things
          </a>
        </div>
        <div className="community-panel-interest">
          <img className="recent-items-img" src={recentItems} />
          <a href="#" className="community-panel-interest-links">
            React Developers - ReactJS &
          </a>
        </div>
        <div className="community-panel-interest">
          <img className="recent-items-img" src={recentItems} />
          <a href="#" className="community-panel-interest-links">
            UI Designer and UI Developer
          </a>
        </div>
        <div className="community-panel-interest">
          <img className="recent-items-img" src={recentItems} />
          <a href="#" className="community-panel-interest-links">
            Linux Community
          </a>
        </div>
        <div className="community-panel-groups">Groups</div>
        <div className="community-panel-interest">
          <img className="recent-items-img" src={recentItems} />
          <a href="#" className="community-panel-interest-links">
            zerotomastery.io
          </a>
        </div>
        <div className="community-panel-interest">
          <img className="recent-items-img" src={recentItems} />
          <a href="#" className="community-panel-interest-links">
            YLD.com Open Source - All things
          </a>
        </div>
        <div className="community-panel-interest">
          <img className="recent-items-img" src={recentItems} />
          <a href="#" className="community-panel-interest-links">
            React Developers - ReactJS &
          </a>
        </div>
        <div className="community-panel-events">Events</div>
        <div className="community-panel-events">Followed Hastags</div>
        <hr className="hr-line" />
        <div className="community-panel-discover-more">Discover More</div>
      </div>
    </>
  )
}

export default SidebarComponent
