import React, { useEffect, useState } from 'react'
import { getAllUsers, addConnection } from '../api/FirestoreAPI'
import DocumentTitle from 'react-document-title'
import ConnectedUsers from './common/ConnectedUsers/ConnectedUsers'
import MyNetworkSidebar from './MyNetworkSidebar'
import '../Sass/NetworkComponent.scss'

const NetworkComponent = ({ currentUser }) => {
  const [users, setUsers] = useState([])

  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id)
  }

  useEffect(() => {
    getAllUsers(setUsers)
  }, [])

  return (
    <>
      <DocumentTitle title={`(26) LinkedIn`}></DocumentTitle>

      <div className="feed-container">
        <div className="sidebar-layout">
          <MyNetworkSidebar />
        </div>
        <div className="main-content-layout"></div>
        <div className="networkConnectionsMain">
          <div className="networkConnectionsMainHeader">Invitations</div>
          <hr className="hr-line" />
          <div className="networkConnectionsContent">
            {users.map((user) => {
              return user.id === currentUser.id ? (
                <></>
              ) : (
                <ConnectedUsers
                  currentUser={currentUser}
                  user={user}
                  key={user.id}
                  getCurrentUser={getCurrentUser}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default NetworkComponent
