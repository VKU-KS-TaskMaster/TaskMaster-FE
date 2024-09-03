import { Button, ConfigProvider, Select, Space, Switch } from 'antd'
import { useTheme } from './hooks/useTheme'
import { darkTheme, lightTheme } from './theme'

const { Option } = Select

const App = () => {
  const [darkMode, toggleTheme] = useTheme()

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      <div style={{ backgroundColor: darkMode ? 'black' : 'white', minHeight: '100vh', padding: '20px' }}>
        <Space direction='vertical'>
          <Switch
            checked={darkMode}
            onChange={toggleTheme}
            checkedChildren='Dark Mode'
            unCheckedChildren='Light Mode'
          />
          <Space>
            <Button type='primary'>Primary Button</Button>
            <Button>Default Button</Button>
            <Button type='dashed'>Dashed Button</Button>
            <Button type='text'>Text Button</Button>
            <Button type='link'>Link Button</Button>
          </Space>
          <Space>
            <Select defaultValue='Option1' style={{ width: 120 }}>
              <Option value='Option1'>Option1</Option>
              <Option value='Option2'>Option2</Option>
            </Select>
            <Select defaultValue='Disabled' style={{ width: 120 }} disabled>
              <Option value='Disabled'>Disabled</Option>
            </Select>
            <Select defaultValue='Loading' style={{ width: 120 }} loading>
              <Option value='Loading'>Loading</Option>
            </Select>
            <Select defaultValue='Clear' style={{ width: 120 }} allowClear>
              <Option value='Clear'>Clear</Option>
            </Select>
          </Space>
        </Space>
      </div>
    </ConfigProvider>
  )
}

export default App
