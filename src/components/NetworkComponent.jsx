import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../api/FirestoreAPI'
import DocumentTitle from 'react-document-title'
import ConnectedUsers from './common/ConnectedUsers/ConnectedUsers'
import MyNetworkSidebar from './MyNetworkSidebar'
import '../Sass/NetworkComponent.scss'

const NetworkComponent = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUsers(setUsers)
  }, [])
  return (
    <>
      <DocumentTitle title={`Feed | LinkedIn`}></DocumentTitle>

      <div className="feed-container">
        <div className="sidebar-layout">
          <MyNetworkSidebar currentUser={currentUser} />
        </div>
        <div className="main-content-layout"></div>

        <div className="networkConnectionsMain">
          {users.map((user) => {
            return <ConnectedUsers user={user} />
          })}
        </div>
      </div>
    </>
  )
}

export default NetworkComponent
