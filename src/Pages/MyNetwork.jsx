import React, { useState, useMemo } from 'react'
import NetworkComponent from '../components/NetworkComponent'
import TopNavigation from '../components/common/TopNavigation/TopNavigation'
import { getCurrentUser } from '../api/FirestoreAPI'
import '../Sass/NetworkComponent.scss'

const MyNetwork = () => {
  const [currentUser, setCurrentUser] = useState({})

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])
  return (
    <>
      <TopNavigation activeLink="network" />
      <NetworkComponent currentUser={currentUser} />
    </>
  )
}

export default MyNetwork
