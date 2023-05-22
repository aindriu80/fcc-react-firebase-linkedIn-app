import React, { useState, useMemo } from 'react'
import { getCurrentUser } from '../api/FirestoreAPI'
import ProfileCard from './common/ProfileCard'
import Modal from '../components/ProfileEditModal'
import '../Sass/ProfileComponent.scss'
import ProfileBackground from '../assets/profileBackground.svg'

const ProfileComponent = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [isEdit, setisEdit] = useState(false)
  const [show, setShow] = useState(false)

  const onEdit = () => {
    setisEdit(!isEdit)
  }

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])

  return (
    <>
      <div className="profile-component">
        <div class="profile-container">
          <div class="scaffold-layout__main">
            {/* <ProfileBackground /> */}
            {isEdit ? (
              <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
            ) : (
              <ProfileCard onEdit={onEdit} currentUser={currentUser} />
            )}
          </div>
          <div class="scaffold-layout__aside">Aside</div>
          <div class="scaffold-layout__analytics">Analytics</div>
          <div class="scaffold-layout__about">About</div>
          <div class="scaffold-layout__activity">Activity</div>
          <div class="scaffold-layout__experience">Experience</div>
          <div class="scaffold-layout__skills">Skills</div>
          <div class="scaffold-layout__interests">Interests</div>
        </div>
        <Modal
          onClose={() => setShow(false)}
          show={show}
          currentUser={currentUser}></Modal>
      </div>
    </>
  )
}

export default ProfileComponent
