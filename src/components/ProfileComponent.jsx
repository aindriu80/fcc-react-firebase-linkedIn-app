import React, { useState, useMemo } from 'react'
import { getCurrentUser } from '../api/FirestoreAPI'
import ProfileCard from './common/ProfileCard'
import ProfileEdit from './common/ProfileEdit'
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
      <ProfileCard currentUser={currentUser} />
      {/* {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )} */}
      {/* ddd */}
      {/* <button onClick={() => setShow(true)}>Show Modal</button> */}
      <Modal
        title="My Modal"
        onClose={() => setShow(false)}
        show={show}
        currentUser={currentUser}>
        <p>This is modal body</p>
      </Modal>
    </>
  )
}

export default ProfileComponent
