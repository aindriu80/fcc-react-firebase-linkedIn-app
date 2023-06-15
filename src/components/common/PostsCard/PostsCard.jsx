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
  console.log('current user ID: ', currentUser?.userID)
  console.log('posts id: ', posts.id)

  return (
    <div className="posts-card" key={id}>
      <p
        className="name"
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
      <LikeButton userId={currentUser?.userID} postId={posts.id} />
    </div>
  )
}

export default PostsCard
