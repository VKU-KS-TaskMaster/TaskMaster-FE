import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <div className='flex h-[100vh] flex-auto flex-col'>
            <Outlet />
        </div>
    )
}

export default AuthLayout
