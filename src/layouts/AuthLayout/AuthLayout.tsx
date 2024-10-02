import { Outlet } from 'react-router-dom'

import AuthContainer from '@containers/Auth/AuthContainer'
import { Content, Header } from '@components/micro/Auth'

function AuthLayout() {
  return (
    <div className='flex h-[100vh] flex-auto flex-col'>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}

export default AuthLayout
