import React, { useState, useMemo } from 'react'
import { postStatus, getStatus } from '../../api/FirestoreAPI'
import photo from '../../assets/photo.svg'
import video from '../../assets/video.svg'
import event from '../../assets/event.svg'
import article from '../../assets/article.svg'
import ModalComponent from '../common/Modal/Modal'

import '../../Sass/PostUpdate.scss'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'

export default function PostUpdate() {
  const [modalOpen, setModalOpen] = useState(false)
  const [status, setStatus] = useState('')
  const [allStatuses, setAllStatuses] = useState([])
  const sendStatus = async () => {
    await postStatus(status)
    await setModalOpen(false)
    await setStatus('')
  }

  useMemo(() => {
    getStatus(setAllStatuses)
  }, [])

  return (
    <>
      <div className="post-status-main">
        <div className="post-status">
          <BsPersonCircle size={30} className="user-logo-post" />
          <button
            className="open-post-modal"
            onClick={() => setModalOpen(true)}>
            Start a Post
          </button>
        </div>

        <div className="post-status">
          <div className="Navbar__Link">
            <img src={photo} width="24px" height="24px" />
            <div className="Navbar__Text">Photo</div>
          </div>

          <div className="Navbar__Link">
            <img src={video} width="24px" height="24px" />
            <div className="Navbar__Text">Video</div>
          </div>

          <div className="Navbar__Link">
            <img src={event} width="24px" height="24px" />
            <div className="Navbar__Text">Event</div>
          </div>

          <div className="Navbar__Link">
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
        />
      </div>
    </>
  )
}
