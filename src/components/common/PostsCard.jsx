import React from 'react'
import '../../Sass/PostsCard.scss'

const PostsCard = ({ posts, id }) => {
  return (
    <div className="posts-card" key={id}>
      <p className="name">{posts.userName}</p>
      <p className="time-stamp">{posts.timeStamp}</p>
      <p className="posts-status">{posts.status}</p>
    </div>
  )
}

export default PostsCard
