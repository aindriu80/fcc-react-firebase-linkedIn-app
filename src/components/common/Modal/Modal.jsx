import React, { useState, useRef, useEffect } from 'react'
import { AiOutlinePicture } from 'react-icons/ai'
import { Button, Modal } from 'antd'

import './Modal.scss'

const ModalComponent = ({
  modalOpen,
  sendStatus,
  setModalOpen,
  setStatus,
  status,
  isEdit,
  updateStatus,
  setCurrentImage,
}) => {
  const [loading, setLoading] = useState(false)

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
        }}
        onCancel={() => {
          setStatus('')
          setModalOpen(false)
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
        <input
          className="modal-input"
          placeholder="What do you want to talk about?"
          onChange={(event) => setStatus(event.target.value)}
          autoFocus
          value={status}
        />
        <label for="modal-picture-upload">
          <AiOutlinePicture className="picture-icon" />
        </label>
        <input
          id="modal-picture-upload"
          type={'file'}
          hidden
          onChange={(event) => setCurrentImage(event.target.files[0])}
        />
      </Modal>
    </>
  )
}

export default ModalComponent
