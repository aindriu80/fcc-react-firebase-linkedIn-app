import React from 'react'
import '../../Sass/PostsCard.scss'

const PostsCard = ({ posts }) => {
  return (
    <div className="posts-card">
      <p className="time-stamp">{posts.timeStamp}</p>
      <p className="posts-status">{posts.status}</p>
    </div>
  )
}

export default PostsCard
