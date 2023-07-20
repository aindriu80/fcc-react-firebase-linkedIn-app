import React, { useState, useMemo } from 'react'
import TopNavigation from '../components/common/TopNavigation/TopNavigation'
import { getCurrentUser } from '../api/FirestoreAPI'

const Messaging = () => {
  const [currentUser, setCurrentUser] = useState({})

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])
  return (
    <>
      <TopNavigation activeLink="messaging" />
    </>
  )
}

export default Messaging
