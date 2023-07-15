import React from 'react'

const ConnectedUsers = ({ user, getCurrentUser }) => {
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
