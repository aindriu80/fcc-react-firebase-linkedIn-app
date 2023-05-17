import React, { useState } from 'react'
import '../../Sass/ProfileEdit.scss'

const ProfileEdit = ({ onEdit }) => {
  return (
    <>
      <div>ProfileEdit</div>

      <button className="edit-btn" onClick={onEdit}>
        Go bac
        {/* <BsFillPencilFill size={20} className="react-icon" /> */}
      </button>
    </>
  )
}

export default ProfileEdit
