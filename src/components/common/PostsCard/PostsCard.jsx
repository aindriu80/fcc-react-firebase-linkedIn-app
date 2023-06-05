import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PostsCard.scss'

const PostsCard = ({ posts, id }) => {
  let navigate = useNavigate()
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
      </p>
      <p className="time-stamp">{posts.timeStamp}</p>
      <p className="posts-status">{posts.status}</p>
    </div>
  )
}

export default PostsCard
