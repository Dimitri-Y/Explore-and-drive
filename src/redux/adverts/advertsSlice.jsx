import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const savedFavorites = JSON.parse(localStorage.getItem('favorites'));

const advertsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  favorites: savedFavorites || [],
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  reducers: {
    changeFavorites(state, action) {
      const index = state.favorites.findIndex(
        advert => advert.id === action.payload.id
      );
      index >= 0
        ? state.favorites.splice(index, 1)
        : state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, state => {
        handlePending(state);
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});
export const { changeFavorites } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
