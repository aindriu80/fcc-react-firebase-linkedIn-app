import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { CgClose } from 'react-icons/cg'
import { FaInfoCircle } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

import '../Sass/ProfileEdit.scss'

const Modal = (props, { onEdit, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser)
  const getInput = (event) => {
    let { name, value } = event.target
    let input = { [name]: value }
    setEditInputs({ ...editInputs, ...input })
  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}>
      <div className="modal">
        {/* onClick={props.onClose} */}
        {/* onClick={} */}
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title"></h4>
          </div>
          <div className="edit-modal-header">
            <>Edit intro</>
          </div>
          <div className="profile-modal-button">
            <CgClose className="modal-close-button" />
          </div>
          <div className="edit-modal-form">
            <p>* indicates required</p>
            <h2>Basic Info</h2>
          </div>
          {/* <div className="modal-footer"> */}
          <div className="modal-body">
            <div className="profile-edit-inputs">
              <label>Firstname *</label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder="First Name"
                name="name"
                // value={editInputs.name}
              />
              <label>Last Name*</label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder="Last name"
                name="lastName"
                // value={editInputs.name}
              />
              <label>Additional Name</label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder=""
                name="additionalName"
                // value={editInputs.name}
              />
              <label>Name pronunciation</label>
              <span className="profile-edit-pronunciation">
                <FaInfoCircle className="pronunciation-info" />
                <>This can only be added using our mobile app</>
              </span>
              <label>Pronouns</label>
              <div class="">
                <select
                  id="text-entity-list-form-component-profileEditFormElement"
                  className="pronouns-option">
                  <option value="Please select">Please select</option>
                  <option value="She/Her">She/Her</option>
                  <option value="He/Him">He/Him</option>
                  <option value="They/Them">They/Them</option>
                  <option value="Custom">Custom</option>
                </select>
                Let others know how to refer to you.
              </div>
              <label>Headline*</label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder="Headline"
                // value={editInputs.headline}
                name="headline"
              />
              <h2>Current Position</h2>
              <label>Position*</label>
              <select id="current-position" className="current-position">
                <option value="Please select">Please select</option>
              </select>

              <span className="profile-edit-pronunciation">
                <AiOutlinePlus />
                <>Add new position</>
              </span>
              {/* <input
                onChange={getInput}
                className="input__input"
                placeholder="Headline"
                // value={editInputs.headline}
                name="headline"
              /> */}
              <label>Country</label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder="Country"
                name="country"
                // value={editInputs.country}
              />
              <label>City</label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder="City"
                name="city"
                // value={editInputs.city}
              />
              <label>Company</label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder="Company"
                // value={editInputs.company}
                name="company"
              />
              <label>Industry </label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder="Industry"
                name="industry"
                // value={editInputs.industry}
              />
              <label>College</label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder="College"
                name="college"
                // value={editInputs.college}
              />
              <label>Website</label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder="Website"
                name="website"
                // value={editInputs.website}
              />
              <label>About</label>
              <textarea
                placeholder="About Me"
                className="input__input"
                onChange={getInput}
                rows={5}
                name="aboutMe"
                // value={editInputs.aboutMe}
              />
              <label>Skills</label>
              <input
                onChange={getInput}
                className="input__input"
                placeholder="Skill"
                name="skills"
                // value={editInputs.skills}
              />
            </div>

            <div className="modal-footer">
              <button className="modal-save-button">Save</button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('root')
  )
}

export default Modal
