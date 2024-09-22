import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from '@features/hook'

export default function RejectedRoute() {
  const user = useAppSelector((state) => state.auth.user)
  return user ? <Outlet /> : <Navigate to='/' />
}
