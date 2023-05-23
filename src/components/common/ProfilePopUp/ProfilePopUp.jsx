import React from 'react'
import { onLogout } from '../../../api/AuthAPI'
import './ProfilePopUp.scss'

export default function ProfilePopUp() {
  return (
    <div className="popup-card">
      <div className="popup-options">
        <div className="popup-option" onClick={onLogout}>
          Logout
        </div>
      </div>
    </div>
  )
}
