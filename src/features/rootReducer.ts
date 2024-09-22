import { combineReducers } from 'redux'

// import RtkQueryService from '@/services/RtkQueryService'
// import auth from './slices/auth'
// import base from './slices/base'
// import locale from './slices/locale/localeSlice'
import themeReducer from './slices/theme'

const staticReducers = {
  // auth,
  // base,
  // locale,
  themeReducer
  // [RtkQueryService.reducerPath]: RtkQueryService.reducer,
}

const rootReducer = (asyncReducers: any) => (state: any, action: any) => {
  const combinedReducer = combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
  return combinedReducer(state, action)
}

export default rootReducer
