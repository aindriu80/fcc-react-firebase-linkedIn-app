import React, { useState, useEffect, useMemo } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import '../Sass/Home.scss'
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader/Loader'
import HomeComponent from '../components/HomeComponent'
import Footer from '../components/FooterComponent'
import { getCurrentUser } from '../api/FirestoreAPI'

export default function Home({ currentUser }) {
  const [loading, setLoading] = useState(true)
  const [curentUser, setCurrentUser] = useState({})
  let navigate = useNavigate()

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])
  return (
    <>
      <HomeComponent curentUser={currentUser} />
      <Footer />
    </>
  )
}
