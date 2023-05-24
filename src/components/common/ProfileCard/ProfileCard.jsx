import React, { useState } from 'react'
import './ProfileCard.scss'
import { BsFillPencilFill } from 'react-icons/bs'
import Modal from '../../ProfileEditModal'
import profileBackground from '../../../assets/profileBackground.svg'

const ProfileCard = ({ currentUser, onEdit }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="profile-card">
        <img src={profileBackground} />
        <div className="edit-btn">
          <button className="edit-btn" onClick={() => setShow(true)}>
            Edit
            <BsFillPencilFill size={20} className="react-icon" />
          </button>
        </div>
        <h3 className="userName">{currentUser.name}</h3>
        <p className="userEmail">{currentUser.email}</p>
      </div>
      <Modal
        title="Edit profile data"
        onClose={() => setShow(false)}
        show={show}
        currentUser={currentUser}></Modal>
    </>
  )
}

export default ProfileCard
