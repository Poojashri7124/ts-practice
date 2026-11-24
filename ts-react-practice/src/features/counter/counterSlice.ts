import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

// 1. the shape of this slice's state
interface CounterState {
  value: number
}

// 2. the initial state uses that type
const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // 3. this reducer receives a number: PayloadAction<number>
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

export const { increment, decrement, incrementBy, reset } = counterSlice.actions

// selector: state is typed as RootState, so state.counter.value is checked
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer