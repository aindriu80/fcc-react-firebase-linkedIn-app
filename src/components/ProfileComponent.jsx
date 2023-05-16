import React, { useState, useMemo } from 'react'
import { getCurrentUser } from '../api/FirestoreAPI'
import ProfileCard from './common/ProfileCard'

const ProfileComponent = () => {
  const [currentUser, setCurrentUser] = useState({})

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])
  return (
    <>
      <ProfileCard currentUser={currentUser} />
    </>
  )
}

export default ProfileComponent
