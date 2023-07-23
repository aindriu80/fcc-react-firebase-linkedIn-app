// import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AutoComplete, Input } from 'antd'
import './FeedSearch.scss'

// const [searchInput, setSearchInput] = useState(false)
const FeedSearch = ({ setIsSearch, setSearchInput }) => (
  <>
    <div className="searchBarTop">
      <AutoComplete
        style={{
          width: 250,
        }}>
        <Input
          size="large"
          className="feedsearch-top"
          placeholder="Search"
          onClick={() => setIsSearch(true)}
          // onClickCapture={() => setIsSearch(true)}
          onChange={(event) => {
            setSearchInput = event.target.value
            console.log(setSearchInput)
          }}
          prefix={<AiOutlineSearch />}
        />
      </AutoComplete>
    </div>

    <div className="search-results"></div>
  </>
)
export default FeedSearch
