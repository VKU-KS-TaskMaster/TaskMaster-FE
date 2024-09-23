import { Outlet } from 'react-router-dom'
import AuthContainer from '@containers/Auth/AuthContainer'

function AuthLayout() {
  return (
    <div className='flex h-[100vh] flex-auto flex-col'>
      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </div>
  )
}

export default AuthLayout
