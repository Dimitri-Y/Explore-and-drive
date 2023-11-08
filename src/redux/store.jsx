import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/advertsSlice';
import { filterReducer } from './adverts/filterSlice';
import { isModalActiveReducer } from './adverts/isModalActiveSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
    isModalActive: isModalActiveReducer,
  },
});
