import React from 'react'
import { Modal } from 'antd'

// import Modal from '../../../Sass/Modal.scss'

const ModalComponent = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <Modal
        title="Create a post"
        style={{
          top: 20,
        }}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}>
        <p>What do you want to talk about?</p>
      </Modal>
    </>
  )
}

export default ModalComponent
