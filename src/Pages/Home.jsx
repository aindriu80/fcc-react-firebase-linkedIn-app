import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import '../Sass/Home.scss'
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader'
import HomeComponent from '../components/HomeComponent'

export default function Home() {
  const [loading, setLoading] = useState(true)
  let navigate = useNavigate()
  // useEffect(() => {
  //   onAuthStateChanged(auth, (res) => {
  //     if (!res?.accessToken) {
  //       navigate('/login')
  //     } else {
  //       setLoading(false)
  //     }
  //   })
  // }, [])

  // return loading ? <Loader /> : <HomeComponent />
  return <HomeComponent />
}
