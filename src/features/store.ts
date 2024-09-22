import { configureStore } from '@reduxjs/toolkit'

// import rootReducer from './rootReducer'
import themeReducer from './slices/theme'
import authSlice from './slices/auth'

export const store = configureStore({
  reducer: {
    // root: rootReducer,
    theme: themeReducer,
    auth: authSlice
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
