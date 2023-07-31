import React, { useState, useEffect } from 'react'
import { getStatus, getUserById } from '../../../api/FirestoreAPI'
import PostsCard from '../PostsCard/PostsCard'

export default function MessageUpdates() {
  const [allStatuses, setAllStatuses] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    getStatus(setAllStatuses)
    getUserById(localStorage.getItem('userEmail')).then((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <>
      <div className="post-messages">
        {allStatuses.map((post) => {
          return (
            <div key={post.id}>
              <PostsCard posts={post} currentUser={currentUser} />
            </div>
          )
        })}
      </div>
    </>
  )
}
