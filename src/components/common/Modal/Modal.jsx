import React, { useState, useRef, useEffect } from 'react'
import { AiOutlinePicture } from 'react-icons/ai'
import { Button, Modal, Progress } from 'antd'

import './Modal.scss'

const ModalComponent = ({
  modalOpen,
  sendStatus,
  setModalOpen,
  setStatus,
  status,
  isEdit,
  updateStatus,
  // setCurrentImage,
  uploadPostImage,
  setPostImage,
  postImage,
}) => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Modal
        title={isEdit ? 'Edit post' : 'Create a post'}
        style={{
          top: 20,
        }}
        open={modalOpen}
        centered
        onOk={() => {
          setStatus('')
          setModalOpen(false)
          setPostImage('')
        }}
        onCancel={() => {
          setStatus('')
          setModalOpen(false)
          setPostImage('')
        }}
        footer={[
          <Button
            onClick={isEdit ? updateStatus : sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
            loading={loading}>
            {isEdit ? 'Update' : 'Post'}
          </Button>,
        ]}>
        <div>
          <input
            className="modal-input"
            placeholder="What do you want to talk about?"
            onChange={(event) => setStatus(event.target.value)}
            autoFocus
            value={status}
          />
          <div className="modal-progress-bar">
            {progress === 0 || progress === 100 ? (
              <></>
            ) : (
              <div className="">
                <Progress
                  className="modal-progress-percentage"
                  type="circle"
                  percent={progress}
                />
              </div>
            )}
          </div>

          {postImage?.length > 0 ? (
            <img
              src={postImage}
              className="post-image-upload"
              alt="postImage"
            />
          ) : (
            <></>
          )}
        </div>
        <label for="modal-picture-upload">
          <AiOutlinePicture className="picture-icon" />
        </label>
        <input
          id="modal-picture-upload"
          type={'file'}
          hidden
          // onChange={(event) => setCurrentImage(event.target.files[0])}
          onChange={(event) =>
            uploadPostImage(event.target.files[0], setPostImage, setProgress)
          }
        />
      </Modal>
    </>
  )
}

export default ModalComponent
