import React, { useState } from 'react'
import ProfileEdit from './ProfileEdit'
import '../../Sass/ProfileCard.scss'

const ProfileCard = ({ currentUser }) => {
  const [isEdit, setisEdit] = useState(false)

  const onEdit = () => {
    setisEdit(!isEdit)
  }
  return (
    <>
      <div className="profile-card">
        <div className="edit-btn">
          <button className="edit-btn" onClick={() => setisEdit(!isEdit)}>
            Edit
          </button>
        </div>
        <h3 className="userName">{currentUser.name}</h3>
        <p className="userEmail">{currentUser.email}</p>
      </div>
    </>
  )
}

export default ProfileCard
