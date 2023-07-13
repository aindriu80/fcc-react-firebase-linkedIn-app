import React from 'react'

const ConnectedUsers = ({ user }) => {
  return (
    <div>
      <div className="connectedUsersUserName">
        {user.name}&nbsp;
        {user.lastName}
        <br />
      </div>
      <div className="connectedUsersUserName">{user.headline}</div>
    </div>
  )
}

export default ConnectedUsers
