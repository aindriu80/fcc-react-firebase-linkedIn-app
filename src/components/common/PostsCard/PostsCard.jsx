import React, { useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getCurrentUser,
  getAllUsers,
  // deletePost,
} from '../../../api/FirestoreAPI'

import LikeButton from '../LikeButton/LikeButton'
import threeDots from '../../../assets/threeDots.svg'
import './PostsCard.scss'

const PostsCard = ({ posts, id }) => {
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({})
  console.log(currentUser)
  const [allUsers, setAllUsers] = useState([])
  const [isConnected, setIsConnected] = useState(false)

  useMemo(() => {
    getCurrentUser(setCurrentUser)
    getAllUsers(setAllUsers)
  }, [])

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
          {posts.userName}&nbsp;
          {posts.userLastname}
        </p>

        <p className="posts-card-edit">
          <button>
            <img src={threeDots} />
          </button>
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
