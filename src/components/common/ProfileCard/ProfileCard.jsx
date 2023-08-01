import React, { useState, useMemo } from 'react'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'
import { getSingleStatus, getSingleUser } from '../../../api/FirestoreAPI'
import { BsFillPencilFill } from 'react-icons/bs'
import Modal from '../../ProfileEditModal'
import PictureModal from '../PictureModal/PictureModal'
import camera from '../../../assets/camera.svg'
import profileBackground from '../../../assets/profileBackground.svg'
import './ProfileCard.scss'

const ProfileCard = ({ onEdit, currentUser }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  // const [allStatuses, setAllStatuses] = useState([])
  const [currentProfile, setCurrentProfile] = useState({})

  // const [currentUser, setCurrentUser] = useState({})
  // console.log('currentUSer', currentUser)

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatuses, location?.state?.id)
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email)
    }
  }, [])
  // console.log('Current Users ImageLink:', currentUser?.imageLink)
  // console.log('current Profile', currentProfile)
  return (
    <>
      <div className="profile-card">
        <div className="profile-background">
          <img className="profile-background-is3" src={profileBackground} />
          <section className="profile-topcard-background-image">
            <button className="profile-topcard-camera-btn">
              <img src={camera} />
            </button>
          </section>
        </div>
        <div className="edit-btn">
          <button
            className="edit-btn"
            onClick={() => {
              setModalOpen(true)
            }}>
            <BsFillPencilFill size={20} className="react-icon" />
          </button>
        </div>
        <div className="ph5">
          <div className="pv-top-card--photo">
            <button
              className="profileImage"
              onClick={() => {
                setIsProfileModalOpen(true)
              }}>
              {currentUser.imageLink ? (
                <img src={currentUser.imageLink} className="user-logo-post" />
              ) : (
                <BsPersonCircle size={152} className="user-logo-post" />
              )}
            </button>
          </div>
          <div className="userName">
            {Object.values(currentProfile).length === 0
              ? [currentUser.name, ' ', currentUser.lastName]
              : currentProfile?.name}
          </div>
          <p className="headline">{currentUser.headline}</p>
          <p className="address">
            {Object.values(currentProfile).length === 0
              ? `${currentUser.city},${currentUser.country}`
              : currentProfile?.country}
            <a href="#" className="connection-details">
              {' '}
              Contact Info
            </a>
          </p>
          <a href="#" className="connection-details">
            500+ Connections
          </a>
          <div className="pv-top-card-v2">
            <button className="profile-card-open-btn">Open to</button>
            <button className="profile-card-profile-btn">
              Add Profile section
            </button>
            <button className="modal-save-more-btn">More</button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          currentUser={currentUser}
          onEdit={onEdit}
          onClose={() => setModalOpen(false)}
        />
      )}
      {isProfileModalOpen && (
        <PictureModal
          currentUser={currentUser}
          onEdit={onEdit}
          onClose={() => setIsProfileModalOpen(false)}
        />
      )}
    </>
  )
}

export default ProfileCard
