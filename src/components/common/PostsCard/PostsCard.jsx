import React, { useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getCurrentUser,
  getAllUsers,
  updatePost,
  deletePost,
  getConnections,
  getUserById,
} from '../../../api/FirestoreAPI'
import ModalComponent from '../Modal/Modal'
import LikeButton from '../LikeButton/LikeButton'
import threeDots from '../../../assets/threeDots.svg'
import './PostsCard.scss'

const PostsCard = ({ posts, id }) => {
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({})
  const [allUsers, setAllUsers] = useState([])
  const [status, setStatus] = useState('')
  const [currentPost, setCurrentPost] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [dropdownVisible, setDropdownVisible] = useState(false)

  // Fetch all users and current user data on component mount
  useEffect(() => {
    Promise.all([getAllUsers(), getCurrentUser()])
      .then(([users, user]) => {
        setAllUsers(users)
        setCurrentUser(user)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  // Fetch the user data for the clicked user whenever `posts.userID` changes
  useEffect(() => {
    getUserById(posts.userID)
      .then((user) => {
        if (user) {
          // Check if user is defined before updating the state
          setCurrentUser(user)
          if (user.id && posts.userID) {
            // Fetch connections when both `user` and `posts.userID` are available
            getConnections(user.id, posts.userID)
              .then((connected) => {
                setIsConnected(connected)
              })
              .catch((error) => {
                console.error('Error fetching connections:', error)
              })
          }
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }, [posts.userID])

  const showSubMenu = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const editPost = () => {
    setDropdownVisible(false)
    setModalOpen(true)
    setStatus(posts?.status)
    setCurrentPost(posts)
    setIsEdit(true)
  }

  const updateStatus = () => {
    updatePost(currentPost.id, status)
    setModalOpen(false)
  }

  const deleteIndividualPost = () => {
    setModalOpen(false)
    deletePost(posts.id)
  }

  useMemo(() => {
    getAllUsers(setAllUsers)
    getCurrentUser(setCurrentUser)
    getUserById(id)
  }, [])

  useEffect(() => {
    getAllUsers(setAllUsers)
    getConnections(currentUser.id, posts.userID, setIsConnected)
  }, [currentUser.id, posts.userID])

  // return isConnected || currentUser.id === posts.userID ? (
  return isConnected || (currentUser.id && currentUser.id === posts.userID) ? (
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
      {posts.postImage ? (
        <img
          src={posts.postImage}
          alt="post-image"
          className="postsCardImage"
        />
      ) : (
        <></>
      )}
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
  ) : (
    <></>
  )
}

export default PostsCard
