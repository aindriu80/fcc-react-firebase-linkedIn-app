import React, { useState, useEffect } from 'react'
import { auth } from '../../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import TopNavigation from '../components/common/TopNavigation/TopNavigation'
import FeedComponent from '../components/FeedComponent'
import '../index.scss'

export default function Feed() {
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
      <TopNavigation activeLink="home" />
      <FeedComponent />
    </>
  )
}
