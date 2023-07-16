import React, { useState, useMemo } from 'react'
import '../Sass/Home.scss'
import HomeComponent from '../components/HomeComponent'
import Footer from '../components/FooterComponent'
import { getCurrentUser } from '../api/FirestoreAPI'

export default function Home() {
  const [currentUser, setCurrentUser] = useState({})

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])
  return (
    <>
      <HomeComponent currentUser={currentUser} />
      <Footer />
    </>
  )
}
