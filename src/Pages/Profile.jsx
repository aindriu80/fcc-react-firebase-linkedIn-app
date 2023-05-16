import React, { useState, useEffect } from 'react'
import { auth } from '../../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import TopNavigation from '../components/common/TopNavigation'
import ProfileComponent from '../components/ProfileComponent'
import '../index.scss'

const Profile = ({ currentUser }) => {
  const [loading, setLoading] = useState(true)
  let navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate('/')
      } else {
        setLoading(false)
      }
    })
  }, [])

  return (
    <>
      <TopNavigation />
      <ProfileComponent currentUser={currentUser} />
    </>
  )
}

export default Profile
