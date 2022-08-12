import { configureStore } from '@reduxjs/toolkit';
import data from './getData';

const store = configureStore({
  reducer: {
    data,
  },
});

export default store;
