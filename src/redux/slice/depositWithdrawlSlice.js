// reducer.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    a: 1000
  },
  reducers: {
    increment:  (state, action) => {
    console.log(action);
      state.a += Number(action.payload);
    },
    decrement: (state, action) => {
      state.a -= Number(action.payload);
    },
    reset: state => {
      state.a = 1000;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
