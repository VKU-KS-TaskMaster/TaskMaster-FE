import { createSlice } from '@reduxjs/toolkit'

interface BaseState {
  createModal: {
    show: boolean
    key: string
  }
}

const initialState: BaseState = {
  createModal: {
    show: false,
    key: ''
  }
}

const baseSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCreateModal(state, action: { payload: { key?: string; show: boolean } }) {
      state.createModal.show = action.payload.show
      state.createModal.key = action.payload.key || ''
    }
  }
})

export const { setCreateModal } = baseSlice.actions
export default baseSlice.reducer
