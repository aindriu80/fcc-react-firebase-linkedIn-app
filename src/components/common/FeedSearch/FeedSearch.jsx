import { AiOutlineSearch } from 'react-icons/ai'
import { AutoComplete, Input } from 'antd'
import './FeedSearch.scss'

const FeedSearch = ({ setIsSearch, setSearchInput, handleSearch }) => {
  const handleInputChange = (event) => {
    const searchValue = event.target.value
    setSearchInput(searchValue)
    handleSearch(searchValue) // Call the handleSearch function to filter users
    setIsSearch(!!searchValue) // Set isSearch to true if there's any search input
  }
  return (
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
            onChange={handleInputChange}
            prefix={<AiOutlineSearch />}
          />
        </AutoComplete>
      </div>
    </>
  )
}
export default FeedSearch
