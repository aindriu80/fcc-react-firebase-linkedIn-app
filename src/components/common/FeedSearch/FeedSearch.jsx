import { AiOutlineSearch } from 'react-icons/ai'
import { AutoComplete, Input } from 'antd'
import './FeedSearch.scss'

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
          onChange={(event) => {
            setSearchInput = event.target.value
          }}
          prefix={<AiOutlineSearch />}
        />
      </AutoComplete>
    </div>
  </>
)
export default FeedSearch
