import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../api/FirestoreAPI'
import ConnectedUsers from './common/ConnectedUsers/ConnectedUsers'
import '../Sass/NetworkComponent.scss'

const NetworkComponent = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUsers(setUsers)
  }, [])
  return (
    <>
      <div className="networkConnectionsMain">
        {users.map((user) => {
          return <ConnectedUsers user={user} />
        })}
      </div>
    </>
  )
}

export default NetworkComponent
