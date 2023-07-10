import React, { useState, useRef, useEffect } from 'react'
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
          value={status}
        />
      </Modal>
    </>
  )
}

export default ModalComponent
