import React, { useState, useMemo } from 'react'
import DocumentTitle from 'react-document-title'
import { getCurrentUser } from '../api/FirestoreAPI'
import ProfileCard from './common/ProfileCard/ProfileCard'
import EditPublicProfile from './common/EditPublicProfile/EditPublicProfile'
import ProfileFooter from './common/ProfileFooter/ProfileFooter'
import privateEye from '../assets/privateEye.svg'
import analyticsProfileViews from '../assets/analyticsProfileViews.svg'
import analyticsPostImpressions from '../assets/analyticsPostImpressions.svg'
import analyticsSearchAppearances from '../assets/analyticsSearchAppearances.svg'

import '../Sass/ProfileComponent.scss'

const ProfileComponent = () => {
  const [currentUser, setCurrentUser] = useState({})
  const textAA = 'LinkedIn'

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])

  return (
    <>
      <DocumentTitle
        title={`${currentUser.name} ${currentUser.lastName} | LinkedIn`}></DocumentTitle>
      <div className="profile-component">
        <div className="profile-container">
          <div className="scaffold-layout__main">
            <ProfileCard currentUser={currentUser} />
          </div>
          <div className="scaffold-layout__aside">
            <EditPublicProfile />
          </div>
          <div className="scaffold-layout__analytics">
            <div className="profile-page-card-analytics">
              <div className="profile-page-analytics-header">
                <div className="profile-card-header-title">Analytics</div>
                <div className="analytics-privacy-setting">
                  <img src={privateEye} alt="" />
                  &nbsp; Private to you
                </div>
                <div className="profile-card-contents">
                  <div className="profile-card-content">
                    <li className="analytics-image-items">
                      <img src={analyticsProfileViews} alt="" />
                    </li>
                    <li>
                      500 profile views
                      <p> Discover who's viewed your profile</p>
                    </li>
                  </div>

                  <div className="profile-card-content">
                    <li className="analytics-image-items">
                      <img src={analyticsPostImpressions} alt="" />
                    </li>
                    <li>
                      1250 post impressions
                      <p>Check out who's engaging with your posts</p>
                    </li>
                  </div>

                  <div className="profile-card-content">
                    <li className="analytics-image-items">
                      <img src={analyticsSearchAppearances} alt="" />
                    </li>
                    <li>
                      600 search appearances
                      <p>See how open you appear in search results.</p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scaffold-layout__about">
            <div className="profile-card-header-title">About</div>
          </div>
          <div className="scaffold-layout__activity">
            <div className="profile-card-header-title">Activity</div>
          </div>
          <div className="scaffold-layout__experience">
            <div className="profile-card-header-title">Experience</div>
          </div>
          <div className="scaffold-layout__skills">
            <div className="profile-card-header-title">Skills</div>
          </div>
          <div className="scaffold-layout__interests">
            <div className="profile-page-card-item">
              <div className="profile-card-header-title">Interests</div>
            </div>
          </div>
          <ProfileFooter />
        </div>
      </div>
    </>
  )
}

export default ProfileComponent
