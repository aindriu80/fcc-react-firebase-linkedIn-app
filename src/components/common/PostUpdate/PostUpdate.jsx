import React, { useState, useMemo } from 'react'
import { postStatus, getStatus, updatePost } from '../../../api/FirestoreAPI'
import photo from '../../../assets/photo.svg'
import video from '../../../assets/video.svg'
import event from '../../../assets/event.svg'
import article from '../../../assets/article.svg'
import ModalComponent from '../Modal/Modal'
import { getCurrentTimeStamp } from '../../helpers/useMoment'
import { getUniqueID } from '../../helpers/getUniqueId'

import './PostUpdate.scss'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'

export default function PostUpdate({ currentUser }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [status, setStatus] = useState('')
  const [allStatuses, setAllStatuses] = useState([])
  const [currentPost, setCurrentPost] = useState({})
  const [isEdit, setIsEdit] = useState(false)

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp('LLLL'),
      userEmail: currentUser.email,
      userName: currentUser.name,
      userLastname: currentUser.lastName,
      postID: getUniqueID(),
      userID: currentUser.id,
    }
    await postStatus(object)
    await setModalOpen(false)
    setIsEdit(false)
    await setStatus('')
  }

  const updateStatus = () => {
    console.log(status)
    updatePost(currentPost.id, status)
    setModalOpen(false)
  }

  useMemo(() => {
    getStatus(setAllStatuses)
  }, [])

  return (
    <>
      <div className="post-status-main">
        <div className="post-status">
          <div className="post-status-profile">
            {currentUser.imageLink ? (
              <img
                src={currentUser.imageLink}
                className="post-status-user-logo-post"
              />
            ) : (
              <BsPersonCircle
                size={48}
                className="post-status-user-logo-post"
              />
            )}
          </div>
          <button
            className="open-post-modal"
            onClick={() => {
              setIsEdit(false)
              setModalOpen(true)
            }}>
            Start a Post
          </button>
        </div>

        <div className="post-status-interact">
          <div className="post-status__Link">
            <img src={photo} width="24px" height="24px" />
            <div className="Navbar__Text">Photo</div>
          </div>

          <div className="post-status__Link">
            <img src={video} width="24px" height="24px" />
            <div className="Navbar__Text">Video</div>
          </div>

          <div className="post-status__Link">
            <img src={event} width="24px" height="24px" />
            <div className="Navbar__Text">Event</div>
          </div>

          <div className="post-status__Link">
            <img src={article} width="24px" height="24px" />
            <div className="Navbar__Text">Write Article</div>
          </div>
        </div>

        <ModalComponent
          setStatus={setStatus}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          status={status}
          sendStatus={sendStatus}
          isEdit={isEdit}
          updateStatus={updateStatus}
        />
      </div>

      {allStatuses.map((posts) => {
        return <div className="" key={posts.id}></div>
      })}
    </>
  )
}
