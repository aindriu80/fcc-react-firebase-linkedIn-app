import React, { useState } from 'react'
import './ProfileCard.scss'
import { BsFillPencilFill } from 'react-icons/bs'
import Modal from '../../ProfileEditModal'
import profileBackground from '../../../assets/profileBackground.svg'

const ProfileCard = ({ onEdit, currentUser }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="profile-card">
        <img src={profileBackground} />
        <div className="edit-btn">
          <button
            className="edit-btn"
            onClick={() => {
              setModalOpen(true)
            }}>
            Edit
            <BsFillPencilFill size={20} className="react-icon" />
          </button>
        </div>
        <h3 className="userName">
          {currentUser.name}&nbsp;
          {currentUser.lastName}
        </h3>
        <p className="headline">{currentUser.headline}</p>
        <p className="address">
          {currentUser.city},&nbsp;
          {currentUser.country},&nbsp;
          <a href="#">Contact Info</a>
        </p>
        <a href="#">500+ Connections</a>
      </div>
      <button class="profile-card-open-btn">Open to</button>
      <button class="profile-card-profile-btn">Add Profile section</button>
      <button class="modal-save-more-btn">More</button>
      <br />
      <br />
      <br />
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
