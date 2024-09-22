import { User } from '@models/user.type'
import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  user: User | null
}

const initialState: AuthState = {
  user: {
    avatar: '/images/logo.png',
    name: 'Phan Xuân Sỹ',
    authority: ['admin', 'user'],
    email: 'sypx.21it@vku.udn.vn'
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setSidebarCollapse(state) {
    //   state.layout.sideNavCollapse = !state.layout.sideNavCollapse
    // }
  }
})

// export const { setSidebarCollapse } = themeSlice.actions
export default authSlice.reducer
