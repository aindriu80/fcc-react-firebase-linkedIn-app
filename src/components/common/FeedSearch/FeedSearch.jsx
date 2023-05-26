import { AiOutlineSearch } from 'react-icons/ai'
import { AutoComplete, Input } from 'antd'
import './FeedSearch.scss'

const App = () => (
  <>
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
  </>
)
export default App
