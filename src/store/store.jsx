import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './reducers/loader';

export const store = configureStore({
  reducer: {
    loader: loaderReducer
  },
})