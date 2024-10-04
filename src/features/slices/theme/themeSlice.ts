import { createSlice } from '@reduxjs/toolkit'

interface BaseState {
  layout: {
    sideNavCollapse: boolean
  }
  mode: 'dark' | 'light'
}

const initialState: BaseState = {
  layout: {
    sideNavCollapse: false
  },
  mode: 'dark'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setSidebarCollapse(state) {
      state.layout.sideNavCollapse = !state.layout.sideNavCollapse
    },
    setThemeMode(state, action: { payload: { mode: BaseState['mode'] } }) {
      state.mode = action.payload.mode
    }
  }
})

export const { setSidebarCollapse, setThemeMode } = themeSlice.actions
export default themeSlice.reducer
