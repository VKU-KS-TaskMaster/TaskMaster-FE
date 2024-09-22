import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  layout: {
    sideNavCollapse: false
  }
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setSidebarCollapse(state) {
      state.layout.sideNavCollapse = !state.layout.sideNavCollapse
    }
  }
})

export const { setSidebarCollapse } = themeSlice.actions
export default themeSlice.reducer
