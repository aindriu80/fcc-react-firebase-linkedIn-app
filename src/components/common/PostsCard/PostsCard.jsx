import React, { useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getCurrentUser,
  getAllUsers,
  updatePost,
  deletePost,
} from '../../../api/FirestoreAPI'
import ModalComponent from '../Modal/Modal'
import LikeButton from '../LikeButton/LikeButton'
import threeDots from '../../../assets/threeDots.svg'
import './PostsCard.scss'

const PostsCard = ({ posts, id, getEditData }) => {
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({})
  const [allUsers, setAllUsers] = useState([])
  const [status, setStatus] = useState('')
  const [currentPost, setCurrentPost] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  const [isEdit, setIsEdit] = useState(false)
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const showSubMenu = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const editPost = () => {
    console.log('Edit Post')
    setDropdownVisible(false)
    setModalOpen(true)
    setStatus(posts?.status)
    setCurrentPost(posts)
    setIsEdit(true)
  }

  const updateStatus = () => {
    console.log(status)
    updatePost(currentPost.id, status)
    setModalOpen(false)
  }

  const deleteIndividualPost = () => {
    setModalOpen(false)
    console.log('delete post')
    console.log(posts.id)
    deletePost(posts.id)
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

        <div
          className="postsCardName"
          onClick={() =>
            navigate('/profile', {
              state: { id: posts?.userID, email: posts.userEmail },
            })
          }>
          {posts.userName}&nbsp;
          {posts.userLastname}
        </div>

        <div className="posts-card-edit">
          {currentUser.id === posts.userID ? (
            <button>
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
              <a onClick={() => editPost(posts)}>Edit post</a>
              <a onClick={() => deleteIndividualPost(posts.id)}>Delete post</a>
              <a href="#">Who can comment on this post?</a>
              <a href="#">Who can see this post?</a>
            </div>
          )}
        </div>
      </div>
      <p className="time-stamp">{posts.timeStamp}</p>
      <p className="posts-status">{posts.status}</p>
      <LikeButton
        userId={currentUser?.userID}
        postId={posts.id}
        currentUser={currentUser}
      />

      <ModalComponent
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        isEdit={isEdit}
        updateStatus={updateStatus}
      />
    </div>
  )
}

export default PostsCard
