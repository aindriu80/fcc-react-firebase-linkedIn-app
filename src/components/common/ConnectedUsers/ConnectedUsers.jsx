import React, { useEffect, useState } from 'react'
import { BsPersonCircle, BsBriefcase } from 'react-icons/bs'
import { getConnections } from '../../../api/FirestoreAPI'

import './ConnectedUsers.scss'

const ConnectedUsers = ({ user, getCurrentUser, currentUser }) => {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    getConnections(currentUser.id, user.id, setIsConnected)
  }, [currentUser.id, user.id])

  return (
    <div>
      <div
        className="connectedUsersUserName"
        onClick={() => getCurrentUser(user.id)}>
        <div className="network-post-card">
          {user.imageLink ? (
            <img src={user.imageLink} className="network-logo-post" />
          ) : (
            <BsPersonCircle size={152} className="network-logo-post" />
          )}
          {user.name}&nbsp;
          {user.lastName}
          <br />
          {user.headline}
        </div>
        <br />
      </div>
    </div>
  )
}

export default ConnectedUsers
