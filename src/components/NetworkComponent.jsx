import React, { useEffect, useState } from 'react'
import { getAllUsers, addConnection, getConnections } from '../api/FirestoreAPI'
import DocumentTitle from 'react-document-title'
import ConnectedUsers from './common/ConnectedUsers/ConnectedUsers'
import MyNetworkSidebar from './MyNetworkSidebar'
import '../Sass/NetworkComponent.scss'

const NetworkComponent = ({ currentUser }) => {
  const [users, setUsers] = useState([])

  const getCurrentUser = (id) => {
    // addConnection(currentUser.id, id)
    console.log('this has been clicked')
  }
  const handleAccept = (id) => {
    addConnection(currentUser.id, id)
    // .then(() => {
    // After adding the connection, update the user list to remove the accepted user.
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
    // })
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
        <div className="networkConnectionsMain">
          <div className="networkConnectionsMainHeader">Invitations</div>
          <hr className="hr-line" />
          <div className="networkConnectionsContent">
            {users.map((user) => {
              return user.id === currentUser.id ? (
                <React.Fragment key={user.userID}></React.Fragment>
              ) : (
                <React.Fragment key={user.userID}>
                  <div className="invitation-card-left">
                    <ConnectedUsers
                      currentUser={currentUser}
                      user={user}
                      getCurrentUser={getCurrentUser}
                    />

                    <div className="invitation-card-right">
                      <div className="button-container">
                        <button className="network-ignore-btn">Ignore</button>

                        <button
                          className="network-accept-btn"
                          onClick={() => handleAccept(user.id)}>
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
          <br />
        </div>
        {/* <div className="networkConnectionsAddContacts">XXXX</div> */}
      </div>
    </>
  )
}

export default NetworkComponent
