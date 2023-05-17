import React, { useState } from 'react'
import '../../Sass/ProfileCard.scss'
import { BsFillPencilFill } from 'react-icons/bs'

const ProfileCard = ({ currentUser, onEdit }) => {
  return (
    <>
      <div className="profile-card">
        <div className="edit-btn">
          <button className="edit-btn" onClick={onEdit}>
            Edit
            <BsFillPencilFill size={20} className="react-icon" />
          </button>
        </div>
        <h3 className="userName">{currentUser.name}</h3>
        <p className="userEmail">{currentUser.email}</p>
      </div>
    </>
  )
}

export default ProfileCard
