import { configureStore } from '@reduxjs/toolkit'

// import rootReducer from './rootReducer'
import baseReducer from './slices/base'
import themeReducer from './slices/theme'
import authReducer from './slices/auth'

export const store = configureStore({
  reducer: {
    // root: rootReducer,,
    base: baseReducer,
    theme: themeReducer,
    auth: authReducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
