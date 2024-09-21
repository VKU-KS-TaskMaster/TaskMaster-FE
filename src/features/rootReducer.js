import { combineReducers } from 'redux'
// import auth from './slices/auth'
// import base from './slices/base'
// import locale from './slices/locale/localeSlice'
import themeReducer from './slices/theme'
// import RtkQueryService from '@/services/RtkQueryService'

const staticReducers = {
  // auth,
  // base,
  // locale,
  themeReducer
  // [RtkQueryService.reducerPath]: RtkQueryService.reducer,
}

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    ...staticReducers,
    ...asyncReducers
  })
  return combinedReducer(state, action)
}

export default rootReducer
