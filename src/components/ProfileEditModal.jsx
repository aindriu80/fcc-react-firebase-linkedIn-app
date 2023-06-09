import React, { useEffect, useState } from 'react'
import { editProfile } from '../api/FirestoreAPI'
import { CgClose } from 'react-icons/cg'
import { FaInfoCircle } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

import '../Sass/ProfileEdit.scss'

const Modal = ({ onClose, onEdit, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser)

  const getInput = (event) => {
    let { name, value } = event.target
    let input = { [name]: value }
    setEditInputs({ ...editInputs, ...input })
  }

  const updateProfileData = async () => {
    console.log(editInputs)
    console.log(currentUser.id)
    await editProfile(currentUser?.id, editInputs)
    await onEdit()
    await onClose()
  }

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        // Close modal when the ESC key is pressed
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscKey)

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [onClose])

  const handleModalClick = (event) => {
    // Close modal when clicking outside the content area
    if (event.target.classList.contains('modal')) {
      onClose()
    }
  }

  return (
    <div className="modal" onClick={handleModalClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title"></h4>
        </div>
        <div className="edit-modal-header">
          <>Edit intro</>
        </div>
        <div className="profile-modal-button">
          <CgClose className="modal-close-button" onClick={onClose} />
        </div>
        <div className="edit-modal-form">
          <p>* indicates required</p>
          <h2>Basic Info</h2>
        </div>
        <div className="modal-body">
          <div className="profile-edit-inputs">
            <label>Firstname *</label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder="First Name"
              name="name"
              value={currentUser.name}
            />
            <label>Last Name*</label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder="Last name"
              name="lastName"
              value={editInputs.lastName}
            />
            <label>Additional Name</label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder=""
              name="additionalName"
              value={editInputs.additionalName}
            />
            <label>Name pronunciation</label>
            <span className="profile-edit-pronunciation">
              <FaInfoCircle className="pronunciation-info" />
              <>This can only be added using our mobile app</>
            </span>
            <label>Pronouns</label>
            <select
              onChange={getInput}
              id="text-entity-list-form-component-profileEditFormElement"
              value={editInputs.pronouns}
              name="pronouns"
              className="pronouns-option">
              <option value="Please select">Please select</option>
              <option value="She/Her">She/Her</option>
              <option value="He/Him">He/Him</option>
              <option value="They/Them">They/Them</option>
              <option value="Custom">Custom</option>
            </select>
            Let others know how to refer to you.
            {/* </div> */}
            <label>Headline*</label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder="Headline"
              value={editInputs.headline}
              name="headline"
            />
            <h2>Current Position</h2>
            <label>Position*</label>
            <select
              onChange={getInput}
              id="current-position"
              name="current-position"
              value={editInputs.currentPosition}
              className="current-position">
              <option value="currentPosition">
                {editInputs.currentPosition}
              </option>
              <option value="Please select">Please select</option>
            </select>
            <span className="profile-edit-pronunciation">
              <AiOutlinePlus />
              <>Add new position</>
            </span>
            <label>Country</label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder="Country"
              name="country"
              value={editInputs.country}
            />
            <label>City</label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder="City"
              name="city"
              value={editInputs.city}
            />
            <label>Company</label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder="Company"
              value={editInputs.company}
              name="company"
            />
            <label>Industry </label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder="Industry"
              name="industry"
              value={editInputs.industry}
            />
            <label>College</label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder="College"
              name="college"
              value={editInputs.college}
            />
            <label>Website</label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder="Website"
              name="website"
              value={editInputs.website}
            />
            <label>About</label>
            <input
              onChange={getInput}
              placeholder="About Me"
              className="input__input"
              name="aboutMe"
              value={editInputs.aboutMe}
            />
            <label>Skills</label>
            <input
              onChange={getInput}
              className="input__input"
              placeholder="Skill"
              name="skills"
              value={editInputs.skills}
            />
          </div>

          <div className="modal-footer">
            <button className="modal-save-button" onClick={updateProfileData}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
