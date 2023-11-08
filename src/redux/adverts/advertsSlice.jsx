import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const savedFavorites = JSON.parse(localStorage.getItem('favorites'));

const advertsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  favorites: savedFavorites || [],
  page: 1,
  limit: 12,
  totalLimit: false,
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
    incPage(state) {
      state.page = state.page + 1;
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
        action.payload.forEach(newAdvert => {
          if (!state.items.some(advert => advert.id === newAdvert.id)) {
            state.items.push(newAdvert);
          }
        });
        state.totalLimit = action.payload.length < state.limit;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});
export const { changeFavorites, incPage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
