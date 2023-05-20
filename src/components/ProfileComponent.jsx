import React, { useState, useMemo } from 'react'
import { getCurrentUser } from '../api/FirestoreAPI'
import ProfileCard from './common/ProfileCard'
import Modal from '../components/ProfileEditModal'

const ProfileComponent = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [isEdit, setisEdit] = useState(false)
  const [show, setShow] = useState(false)

  const onEdit = () => {
    setisEdit(!isEdit)
  }

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])

  return (
    <>
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard onEdit={onEdit} currentUser={currentUser} />
      )}
      <Modal
        onClose={() => setShow(false)}
        show={show}
        currentUser={currentUser}></Modal>
    </>
  )
}

export default ProfileComponent
