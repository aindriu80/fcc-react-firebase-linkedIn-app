import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostUpdate from '../components/common/PostUpdate/PostUpdate'
import MessageUpdates from '../components/common/MessageUpdates/MessageUpdates'
import '../Sass/FeedComponent.scss'
import { getCurrentUser } from '../api/FirestoreAPI'
import SidebarComponent from './SidebarComponent'
import AddToYourFeed from './AddToYourFeed'
import { auth } from '../../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

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
      <div className="container">
        <div className="sidebar-layout">
          <SidebarComponent currentUser={currentUser} />
        </div>
        <div className="share-box">
          <PostUpdate currentUser={currentUser} />
        </div>
        <div className="feed-share">
          <MessageUpdates />
        </div>
        <div className="layout-aside">
          <AddToYourFeed currentUser={currentUser} />
        </div>
      </div>
    </>
  )
}
