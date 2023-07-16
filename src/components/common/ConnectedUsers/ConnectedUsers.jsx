import React, { useEffect, useState } from 'react'

import { getConnections } from '../../../api/FirestoreAPI'

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
        {user.name}&nbsp;
        {user.lastName}
        <br />
      </div>
      <div className="connectedUsersUserName">{user.headline}</div>
    </div>
  )
}

export default ConnectedUsers
