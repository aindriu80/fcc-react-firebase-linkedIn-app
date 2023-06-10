import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import PostUpdate from '../components/common/PostUpdate/PostUpdate'
import MessageUpdates from '../components/common/MessageUpdates/MessageUpdates'
import { getCurrentUser } from '../api/FirestoreAPI'
import SidebarComponent from './SidebarComponent'
import AddToYourFeed from './AddToYourFeed'
import { auth } from '../../firebaseConfig'
import '../Sass/FeedComponent.scss'

export default function FeedComponent() {
  const [currentUser, setCurrentUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate('/feed')
      } else {
        setLoading(false)
      }
    })
  }, [])

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])

  return (
    <>
      <div class="feed-container">
        <div class="sidebar-layout">
          <SidebarComponent currentUser={currentUser} />
        </div>
        <div class="main-content-layout">
          <PostUpdate currentUser={currentUser} />
          <MessageUpdates />
        </div>
        <div class="right-side-layout">
          <AddToYourFeed currentUser={currentUser} />
        </div>
      </div>
    </>
  )
}
