import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import '../Sass/ProfileEditModal.scss'

const Modal = (props, { onEdit, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser)
  const getInput = (event) => {
    let { name, value } = event.target
    let input = { [name]: value }
    setEditInputs({ ...editInputs, ...input })
  }

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs)
    await onEdit()
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
        onClick={props.onClose}
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title"></h4>
          </div>
          <div className="modal-body"></div>
          <div className="modal-footer">
            <button className="button">Close</button>
            <div className="profile-edit-inputs">
              <label>Name</label>
              <input
                onChange={getInput}
                className="common-input"
                placeholder="Name"
                name="name"
                value={editInputs.name}
              />
              <label>Headline</label>
              <input
                onChange={getInput}
                className="common-input"
                placeholder="Headline"
                value={editInputs.headline}
                name="headline"
              />
              <label>Country</label>
              <input
                onChange={getInput}
                className="common-input"
                placeholder="Country"
                name="country"
                value={editInputs.country}
              />
              <label>City</label>
              <input
                onChange={getInput}
                className="common-input"
                placeholder="City"
                name="city"
                value={editInputs.city}
              />
              <label>Company</label>
              <input
                onChange={getInput}
                className="common-input"
                placeholder="Company"
                value={editInputs.company}
                name="company"
              />
              <label>Industry </label>
              <input
                onChange={getInput}
                className="common-input"
                placeholder="Industry"
                name="industry"
                value={editInputs.industry}
              />
              <label>College</label>
              <input
                onChange={getInput}
                className="common-input"
                placeholder="College"
                name="college"
                value={editInputs.college}
              />
              <label>Website</label>
              <input
                onChange={getInput}
                className="common-input"
                placeholder="Website"
                name="website"
                value={editInputs.website}
              />
              <label>About</label>
              <textarea
                placeholder="About Me"
                className="common-textArea"
                onChange={getInput}
                rows={5}
                name="aboutMe"
                value={editInputs.aboutMe}
              />
              <label>Skills</label>
              <input
                onChange={getInput}
                className="common-input"
                placeholder="Skill"
                name="skills"
                value={editInputs.skills}
              />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('root')
  )
}

export default Modal
