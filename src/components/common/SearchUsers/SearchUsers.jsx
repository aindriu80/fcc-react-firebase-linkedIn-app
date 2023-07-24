import React, { useState } from 'react'
import './SearchUsers.scss'

const SearchUsers = ({ setIsSearch, setSearchInput }) => {
  return (
    <div className="search-users">
      <input />
      onChange={(event) => setSearchInput(event.target.value)}
    </div>
  )
}

export default SearchUsers
