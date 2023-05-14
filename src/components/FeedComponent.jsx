import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PostUpdate from '../components/common/PostUpdate'
import MessageUpdates from '../components/common/MessageUpdates'
import '../Sass/FeedComponent.scss'
import { getCurrentUser } from '../api/FirestoreAPI'
import SidebarComponent from './SidebarComponent'

export default function FeedComponent() {
  const [currentUser, setCurrentUser] = useState({})
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
        <div className="layout-aside">layout-aside</div>
      </div>
    </>
  )
}
