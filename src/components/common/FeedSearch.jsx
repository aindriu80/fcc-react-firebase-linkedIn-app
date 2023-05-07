import { AiOutlineSearch } from 'react-icons/ai'
import { AutoComplete, Input } from 'antd'

const App = () => (
  <>
    <AutoComplete
      style={{
        width: 250,
      }}>
      <Input size="large" placeholder="Search" prefix={<AiOutlineSearch />} />
    </AutoComplete>
  </>
)
export default App
