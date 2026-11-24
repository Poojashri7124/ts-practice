import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// the types are taken FROM the store, so they always stay correct
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch