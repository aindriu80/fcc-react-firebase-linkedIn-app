import React, { useState, useMemo } from 'react'
import { postStatus, getStatus } from '../../api/FirestoreAPI'

export default function MessageUpdates() {
  const [allStatuses, setAllStatuses] = useState([])

  useMemo(() => {
    getStatus(setAllStatuses)
  }, [])

  return (
    <>
      <div className="post-messages">
        {allStatuses.map((posts) => {
          return (
            <>
              <p>{posts.status}</p>
            </>
          )
        })}
      </div>
    </>
  )
}
