import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../../../api/FirestoreAPI'
import LikeButton from '../LikeButton/LikeButton'
import './PostsCard.scss'

const PostsCard = ({ posts, id }) => {
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({})

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, [])

  return (
    <div className="posts-card" key={id}>
      <p
        className="postsCardName"
        onClick={() =>
          navigate('/profile', {
            state: { id: posts?.userID, email: posts.userEmail },
          })
        }>
        {posts.userName}
        {posts.lastName}
      </p>
      <p className="time-stamp">{posts.timeStamp}</p>
      <p className="posts-status">{posts.status}</p>
      <LikeButton
        userId={currentUser?.userID}
        postId={posts.id}
        currentUser={currentUser}
      />
    </div>
  )
}

export default PostsCard
