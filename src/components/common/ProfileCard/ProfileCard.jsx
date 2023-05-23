import React, { useState } from 'react'
import './ProfileCard.scss'
import { BsFillPencilFill } from 'react-icons/bs'
import Modal from '../../ProfileEditModal'

const ProfileCard = ({ currentUser, onEdit }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="profile-card">
        <div className="edit-btn">
          {/* <button onClick={() => setShow(true)}>Show Modal</button> */}
          {/* <button className="edit-btn" onClick={onEdit}> */}
          <button className="edit-btn" onClick={() => setShow(true)}>
            Edit
            <BsFillPencilFill size={20} className="react-icon" />
          </button>
        </div>
        <h3 className="userName">{currentUser.name}</h3>
        <p className="userEmail">{currentUser.email}</p>
      </div>
      <Modal
        title="My Modal"
        onClose={() => setShow(false)}
        show={show}
        currentUser={currentUser}>
        <p>This is modal body</p>
      </Modal>
    </>
  )
}

export default ProfileCard
