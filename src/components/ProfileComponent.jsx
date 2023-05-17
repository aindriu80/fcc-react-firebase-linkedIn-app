import React, { useState, useMemo } from 'react'
import { getCurrentUser } from '../api/FirestoreAPI'
import ProfileCard from './common/ProfileCard'
import ProfileEdit from './common/ProfileEdit'

const ProfileComponent = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [isEdit, setisEdit] = useState(false)

  const onEdit = () => {
    setisEdit(!isEdit)
  }

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])

  return (
    <>
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )}
    </>
  )
}

export default ProfileComponent
