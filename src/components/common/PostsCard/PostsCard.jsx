import React, { useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, getAllUsers } from '../../../api/FirestoreAPI'

import ModalComponent from '../Modal/Modal'

import LikeButton from '../LikeButton/LikeButton'
import threeDots from '../../../assets/threeDots.svg'
import './PostsCard.scss'
// import '../../../components/common/TopNavigation/TopNavigation.scss'

const PostsCard = ({ posts, id, getEditData }) => {
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({})
  const [allUsers, setAllUsers] = useState([])
  const [status, setStatus] = useState('')

  const [allStatuses, setAllStatuses] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  const [dropdownVisible, setDropdownVisible] = useState(false)

  const showSubMenu = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

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
          {currentUser.id === posts.userID ? (
            <button>
              {/* <img src={threeDots} onClick={() => getEditData(posts)} /> */}
              <img src={threeDots} onClick={() => showSubMenu()} />
            </button>
          ) : (
            <></>
          )}

          {dropdownVisible && (
            <div className="posts-dropdown-content">
              <div className="posts-header-dropdown"></div>

              <a href="#">Feature on top of profile</a>
              <a href="#">Save</a>
              <a href="#">copy link to post</a>
              <a href="#">Embed this post</a>
              <a href="#">Edit post</a>
              <a href="#">Delete post</a>
              <a href="#">Who can comment on this post?</a>
              <a href="#">Who can see this post?</a>
            </div>
          )}
        </p>
      </div>
      <p className="time-stamp">{posts.timeStamp}</p>
      <p className="posts-status">{posts.status}</p>
      <LikeButton
        userId={currentUser?.userID}
        postId={posts.id}
        currentUser={currentUser}
      />

      <ModalComponent
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={setStatus}
      />
    </div>
  )
}

export default PostsCard
