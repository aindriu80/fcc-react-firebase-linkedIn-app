import React from 'react'
import '../../Sass/PostsCard.scss'

const PostsCard = ({ posts }) => {
  return (
    <div className="posts-card">
      <p className="posts-status">{posts.status}</p>
    </div>
  )
}

export default PostsCard
