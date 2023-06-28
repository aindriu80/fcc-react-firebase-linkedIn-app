import React, { useEffect, useState } from 'react'
import { uploadImage as uploadImageAPI } from '../../../api/ImageUpload'
import { CgClose } from 'react-icons/cg'
import { editProfile } from '../../../api/FirestoreAPI'

import './PictureModal.scss'

const PictureModal = ({ onClose, currentUser }) => {
  const [currentImage, setCurrentImage] = useState({})
  const [imageLink, setImageLink] = useState('')

  const getImage = (event) => {
    setCurrentImage(event.target.files[0])
  }

  const uploadProfilePicture = () => {
    uploadImageAPI(currentImage, currentUser.id)
    onClose()
  }

  useEffect(() => {
    editProfile('CurrentUser', currentUser)
    console.log('image link', imageLink)
  }, [imageLink])

  console.log(currentUser?.userID)
  console.log(currentUser?.id)

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
          <h4 className="modal-title">Upload an Image</h4>
        </div>
        <div className="edit-modal-header">
          <>Upload Photograph</>
        </div>
        <div className="profile-modal-button">
          <CgClose className="modal-close-button" onClick={onClose} />
        </div>
        <div className="edit-modal-form"></div>
        <div className="modal-body">
          <div className="modal-footer">
            <input type={'file'} onChange={getImage} />
            <button
              onClick={uploadProfilePicture}
              className="modal-save-button">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PictureModal
