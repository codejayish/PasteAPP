import { createSlice } from '@reduxjs/toolkit'
// each features logic is maintained in slice and these slice contains 1)initial state &   2)reducers
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    // increment, reset, decrement,  incrementByAmount - these r the actions which we r about to perform
    increment: state => {
      state.value += 1
    },
    reset: state => {
        state.value = 0
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions
//whenever action comes to store, then store will pass that action to reducer
export default counterSlice.reducer