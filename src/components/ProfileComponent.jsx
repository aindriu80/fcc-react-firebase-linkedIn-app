import React, { useState, useMemo } from 'react'
import { getCurrentUser } from '../api/FirestoreAPI'
import ProfileCard from './common/ProfileCard/ProfileCard'
import ProfileFooter from './common/ProfileFooter/ProfileFooter'
// import Modal from '../components/ProfileEditModal'
import '../Sass/ProfileComponent.scss'

const ProfileComponent = () => {
  const [currentUser, setCurrentUser] = useState({})
  // const [isEdit, setisEdit] = useState(false)

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])

  return (
    <>
      <div className="profile-component">
        <div className="profile-container">
          <div className="scaffold-layout__main">
            <ProfileCard currentUser={currentUser} />
          </div>
          <div className="scaffold-layout__aside">Aside</div>
          <div className="scaffold-layout__analytics">Analytics</div>
          <div className="scaffold-layout__about">About</div>
          <div className="scaffold-layout__activity">Activity</div>
          <div className="scaffold-layout__experience">Experience</div>
          <div className="scaffold-layout__skills">Skills</div>
          <div className="scaffold-layout__interests">Interests</div>
          <ProfileFooter />
        </div>
        <div className=""></div>
      </div>
    </>
  )
}

export default ProfileComponent
