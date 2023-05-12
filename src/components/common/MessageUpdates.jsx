import React, { useState, useMemo } from 'react'
import { postStatus, getStatus } from '../../api/FirestoreAPI'
import PostsCard from '../common/PostsCard'

export default function MessageUpdates() {
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
              <PostsCard posts={posts} />
            </div>
          )
        })}
      </div>
    </>
  )
}
