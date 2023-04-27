import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import LoginComponent from '../components/LoginComponent'
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader'
import FeedComponent from '../components/FeedComponent'

import HomeComponent from '../components/HomeComponent'
export default function Login() {
  const [loading, setLoading] = useState(true)
  let navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate('/')
      } else {
        setLoading(false)
      }
    })
  }, [])
  // return loading ? <Loader /> : <LoginComponent />
  // return loading ? <Loader /> : <FeedComponent/>

  // return loading ? <Loader /> : <HomeComponent />
  return <LoginComponent />
}
