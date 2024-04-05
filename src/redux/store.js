// store.js
import { configureStore } from '@reduxjs/toolkit';
import depositWithdrawl from './slice/depositWithdrawlSlice';

const store = configureStore({
  reducer: {
    counter: depositWithdrawl
  }
});

export default store;
