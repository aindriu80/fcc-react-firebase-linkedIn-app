import React, { useState, useMemo, useEffect } from 'react'
import DocumentTitle from 'react-document-title'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import PostUpdate from '../components/common/PostUpdate/PostUpdate'
import MessageUpdates from '../components/common/MessageUpdates/MessageUpdates'
import SidebarComponent from './SidebarComponent'
import AddToYourFeed from './AddToYourFeed'
import { getAllUsers, getCurrentUser } from '../api/FirestoreAPI'
import { auth } from '../../firebaseConfig'
import downArrow from '../assets/down-arrow.svg'
import '../Sass/FeedComponent.scss'

export default function FeedComponent() {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  const [allUsers, setAllUsers] = useState([])
  const [allStatuses, setAllStatus] = useState([])
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
    getAllUsers(setAllUsers)
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

          <div>
            <MessageUpdates />
            {allStatuses.map((posts) => {
              return (
                <div key={posts.id}>
                  {/* <PostsCard posts={posts} getEditData={getEditData} /> */}
                  <MessageUpdates posts={posts} getEditData={getEditData} />
                  {console.log('posts', posts)}
                  {console.log('getEditData', getEditData)}
                </div>
              )
            })}
          </div>
        </div>
        <div className="right-side-layout">
          <AddToYourFeed currentUser={currentUser} />
        </div>
      </div>
    </>
  )
}
