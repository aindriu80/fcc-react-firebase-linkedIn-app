import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { uploadImage as uploadImageAPI } from '../../../api/ImageUpload'
import { BsPersonCircle } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { editProfile } from '../../../api/FirestoreAPI'
import editPhoto from '../../../assets/editPhoto.svg'
import addPhoto from '../../../assets/addPhoto.svg'
import framesPhoto from '../../../assets/framesPhoto.svg'
import deletePhoto from '../../../assets/deletePhoto.svg'

import './PictureModal.scss'

const PictureModal = ({ onClose, currentUser }) => {
  const [currentImage, setCurrentImage] = useState({})
  const [imageLink, setImageLink] = useState('')

  const getImage = (event) => {
    setCurrentImage(event.target.files[0])
    setImageLink(URL.createObjectURL(event.target.files[0]))
  }

  const uploadProfilePicture = () => {
    uploadImageAPI(currentImage, currentUser.id)
    onClose()
  }

  useEffect(() => {
    editProfile('CurrentUser', currentUser)
  }, [imageLink])

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
    <div className="picture-modal" onClick={handleModalClick}>
      <div className="picture-modal-content">
        <div className="picture-modal-header">
          <div className="picture-edit-modal-header">Profile photo</div>
        </div>

        <div className="picture-profile-modal-button">
          <CgClose className="picture-modal-close-button" onClick={onClose} />
        </div>
        <div className="picture-edit-modal-form">
          {imageLink ? (
            <img
              src={imageLink}
              className="user-logo-post"
              alt="User profile"
            />
          ) : currentUser.imageLink ? (
            <img
              src={currentUser.imageLink}
              className="user-logo-post"
              alt="User profile"
            />
          ) : (
            <BsPersonCircle size={152} className="user-logo-post" />
          )}
        </div>

        <div className="picture-modal-footer">
          <div className="image-upload-main">
            <label htmlFor="actual-btn" className="upload-image-btn"></label>
            <Button
              onClick={uploadProfilePicture}
              className="picture-modal-save-button">
              Upload
            </Button>
          </div>

          <div className="picture-upload-interact">
            <div className="profile-photo__Link">
              <img
                src={editPhoto}
                className="profile-photo-img"
                alt="Edit photo"
              />
              <div className="Navbar__Text">Photo</div>
            </div>

            <div className="profile-photo__Link">
              <div className="Navbar__Text">
                <label htmlFor="actual-btn" className="profile-photo__Link">
                  <img
                    src={addPhoto}
                    className="profile-photo-img"
                    alt="Add photo"
                  />
                  <input
                    type="file"
                    id="actual-btn"
                    hidden
                    onChange={getImage}
                  />
                  <div className="Navbar__Text">Add photos</div>
                </label>
              </div>
            </div>

            <div className="profile-photo__Link">
              <img
                src={framesPhoto}
                className="profile-photo-img"
                alt="Frames"
              />
              <div className="Navbar__Text">Frames</div>
            </div>

            <div className="picture-upload-rhs">
              <div className="profile-photo__Link">
                <img
                  src={deletePhoto}
                  className="profile-photo-img"
                  alt="Delete image"
                />
                <div className="Navbar__Text">Delete Image</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PictureModal
