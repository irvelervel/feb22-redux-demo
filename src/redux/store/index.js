import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'
// this will set our store up!

const store = configureStore({
  reducer: mainReducer,
})

export default store
