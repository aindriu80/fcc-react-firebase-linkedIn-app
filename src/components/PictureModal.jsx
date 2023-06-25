import React, { useState } from 'react'

import { uploadImage } from '../api/ImageUpload'

const PictureModal = () => {
  const [currentImage, setCurrentImage] = useState({})
  const getImage = (event) => {
    setCurrentImage(event.target.files[0])
  }

  const uploadProfilePicture = () => {
    uploadImage(currentImage)
  }
  return (
    <>
      <input type={'file'} onChange={getImage} />
      <button onClick={uploadProfilePicture}>Upload</button>
    </>
  )
}
export default PictureModal
