import { AiOutlineSearch } from 'react-icons/ai'
import { AutoComplete, Input } from 'antd'
import './FeedSearch.scss'

const App = () => (
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
          prefix={<AiOutlineSearch />}
        />
      </AutoComplete>
    </div>
  </>
)
export default App
