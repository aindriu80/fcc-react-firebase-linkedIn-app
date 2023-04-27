import React from 'react'
import { auth } from '../../firebaseConfig'
import '../Sass/FeedComponent.scss'

export default function FeedComponent() {
  const logout = () => {
    auth.signOut()
  }
  return (
    <div>
      <h2>Feed Component</h2>
      <button onClick={logout} className="home-sign-out">
        Logout
      </button>
    </div>
  )
}
