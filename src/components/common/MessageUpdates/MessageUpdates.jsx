import React, { useState, useMemo } from 'react'
import { getStatus, getSingleUser } from '../../../api/FirestoreAPI'
import PostsCard from '../PostsCard/PostsCard'

export default function MessageUpdates() {
  const [allStatuses, setAllStatuses] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useMemo(() => {
    getStatus(setAllStatuses)
    getSingleUser(setCurrentUser, localStorage.getItem('userEmail'))
  }, [])

  return (
    <>
      <div className="post-messages">
        {allStatuses.map((posts, id) => {
          return (
            <div key={posts.id}>
              {/* <PostsCard posts={posts} userID={userID} /> */}
              <PostsCard posts={posts} userID={currentUser} />
            </div>
          )
        })}
      </div>
    </>
  )
}
