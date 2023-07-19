import React, { useState, useMemo, useEffect } from 'react'
import DocumentTitle from 'react-document-title'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import PostUpdate from '../components/common/PostUpdate/PostUpdate'
import MessageUpdates from '../components/common/MessageUpdates/MessageUpdates'
import SidebarComponent from './SidebarComponent'
import AddToYourFeed from './AddToYourFeed'
import { getCurrentUser } from '../api/FirestoreAPI'
import { auth } from '../../firebaseConfig'
import downArrow from '../assets/down-arrow.svg'
import '../Sass/FeedComponent.scss'

export default function FeedComponent() {
  const [loading, setLoading] = useState(true)
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

  const toggleDropdown = () => {
    console.log('Down Arrow')
  }

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])

  return (
    <>
      <DocumentTitle title={`Feed | LinkedIn`}></DocumentTitle>

      <div className="feed-container">
        <div className="sidebar-layout">
          <SidebarComponent currentUser={currentUser} />
        </div>
        <div className="main-content-layout">
          <PostUpdate currentUser={currentUser} />
          <div className="sort-posts-ember">
            <button className="ember-sort-button">
              <hr className="flex-grow-1" />
              <div className="display-flex t-black">
                <span className="t-black--light">Sort By:</span>
                <span className="t-12 t-bold mh1">
                  Top <img src={downArrow} onClick={toggleDropdown} />
                </span>
              </div>
            </button>
          </div>
          <MessageUpdates />
        </div>
        <div className="right-side-layout">
          <AddToYourFeed currentUser={currentUser} />
        </div>
      </div>
    </>
  )
}
