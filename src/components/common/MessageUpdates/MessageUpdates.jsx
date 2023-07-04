import React, { useState, useMemo } from 'react'
import { postStatus, getStatus } from '../../../api/FirestoreAPI'
import PostsCard from '../PostsCard/PostsCard'

export default function MessageUpdates({ currentUser }) {
  const [allStatuses, setAllStatuses] = useState([])

  useMemo(() => {
    getStatus(setAllStatuses)
  }, [])

  return (
    <>
      <div className="post-messages">
        {allStatuses.map((posts, id) => {
          return (
            <div key={posts.id}>
              <PostsCard posts={posts} currentUser={currentUser} />
            </div>
          )
        })}
      </div>
    </>
  )
}
