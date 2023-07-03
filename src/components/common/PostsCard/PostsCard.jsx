import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, getAllUsers } from '../../../api/FirestoreAPI'
import LikeButton from '../LikeButton/LikeButton'
import './PostsCard.scss'

const PostsCard = ({ posts, id }) => {
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({})
  const [allUsers, setAllUsers] = useState([])

  useMemo(() => {
    getCurrentUser(setCurrentUser)
    getAllUsers(setAllUsers)
  }, [])
  console.log(
    allUsers
      .filter((item) => item.id === posts.userID)
      .map((item) => item.imageLink)
  )

  return (
    <div className="posts-card" key={id}>
      <div className="image-post-card">
        <img
          alt="profile-image"
          className="post-image-feed"
          src={
            allUsers
              .filter((item) => item.id === posts.userID)
              .map((item) => item.imageLink)[0]
          }
        />
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
      </div>

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
