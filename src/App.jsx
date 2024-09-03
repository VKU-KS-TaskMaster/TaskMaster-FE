import { Button, ConfigProvider, Select, Space, Switch } from 'antd'
import { getIdToken, signInWithPopup } from 'firebase/auth'
import authApi from './apis/auth.api'
import { auth, provider } from './config/firebase.config'
import { useAuth } from './hooks/useAuth'
import { useTheme } from './hooks/useTheme'
import { darkTheme, lightTheme } from './theme'

const { Option } = Select

const App = () => {
  const [darkMode, toggleTheme] = useTheme()
  const { user } = useAuth()

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const idToken = await getIdToken(result.user)
      localStorage.setItem('token', idToken)
      const res = await authApi.loginWithGoogle(idToken)
      console.log('🚀 ~ loginWithGoogle ~ res:', res)
    } catch (error) {
      console.log('🚀 ~ loginWithGoogle ~ error:', error)
    }
  }

  const logout = async () => {
    await auth.signOut()
    localStorage.removeItem('token')
  }

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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {user ? (
            <div>
              <p>Xin chào: {user.email}</p>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <button onClick={loginWithGoogle}>Login with google</button>
          )}
        </div>
      </div>
    </ConfigProvider>
  )
}

export default App
