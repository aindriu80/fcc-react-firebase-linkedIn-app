import React, { useState } from 'react'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'
import { BsFillPencilFill } from 'react-icons/bs'
import camera from '../../../assets/camera.svg'
import Modal from '../../ProfileEditModal'
import profileBackground from '../../../assets/profileBackground.svg'
import './ProfileCard.scss'

const ProfileCard = ({ onEdit, currentUser }) => {
  const [isModalOpen, setModalOpen] = useState(false)

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
            <BsPersonCircle size={152} className="user-logo-post" />
          </div>
          <div className="userName">
            {currentUser.name}&nbsp;
            {currentUser.lastName}
          </div>
          <p className="headline">{currentUser.headline}</p>
          <p className="address">
            {currentUser.city},&nbsp;
            {currentUser.country},&nbsp;
            <a href="#">Contact Info</a>
          </p>
          <a href="#">500+ Connections</a>
          <div className="pv-top-card-v2">
            <button className="profile-card-open-btn">Open to</button>
            <button className="profile-card-profile-btn">
              Add Profile section
            </button>
            <button className="modal-save-more-btn">More</button>
          </div>
        </div>
        <br />
      </div>
      {isModalOpen && (
        <Modal
          currentUser={currentUser}
          onClose={() => setModalOpen(false)}
          // Pass other necessary props to the modal component
        />
      )}
    </>
  )
}

export default ProfileCard
