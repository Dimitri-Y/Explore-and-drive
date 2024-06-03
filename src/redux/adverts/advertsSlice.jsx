import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
const savedRentalOrder = JSON.parse(localStorage.getItem('rentalOrder'));
const savedRentalOrderCount = JSON.parse(
  localStorage.getItem('rentalOrderCount')
);

const advertsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  favorites: savedFavorites || [],
  page: 1,
  limit: 12,
  totalLimit: false,
  lastVisibleId: null,
  rentalOrder: savedRentalOrder || [],
  rentalOrderCount: savedRentalOrderCount || 0,
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
    changeRentalOrderPlus(state, action) {
      state.rentalOrder.push(action.payload);
      localStorage.setItem('rentalOrder', JSON.stringify(state.rentalOrder));
      state.rentalOrderCount = state.rentalOrder.reduce((total, advert) => {
        const rentalPrice =
          typeof advert.rentalPrice === 'string'
            ? parseInt(advert.rentalPrice.replace(/[^0-9.-]+/g, ''))
            : advert.rentalPrice;

        return total + (rentalPrice || 0);
      }, 0);
      localStorage.setItem(
        'rentalOrderCount',
        JSON.stringify(state.rentalOrderCount)
      );
    },
    changeRentalOrderMinus(state, action) {
      const rentalOrder = state.rentalOrder;
      const index = rentalOrder.findIndex(
        advert => advert.id === action.payload.id
      );
      if (index >= 0) {
        state.rentalOrder.splice(index, 1);
      } else {
      }
      state.rentalOrderCount = rentalOrder.reduce((total, advert) => {
        const rentalPrice =
          typeof advert.rentalPrice === 'string'
            ? parseInt(advert.rentalPrice.replace(/[^0-9.-]+/g, ''))
            : advert.rentalPrice;

        return total + (rentalPrice || 0);
      }, 0);
      localStorage.setItem(
        'rentalOrderCount',
        JSON.stringify(state.rentalOrderCount)
      );
      localStorage.setItem('rentalOrder', JSON.stringify(state.rentalOrder));
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
        action.payload.adverts.forEach(newAdvert => {
          if (!state.items.some(advert => advert.id === newAdvert.id)) {
            state.items.push(newAdvert);
          }
        });
        state.lastVisibleId = action.payload.lastVisibleId;
        state.totalLimit = action.payload.adverts.length < state.limit;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const {
  changeFavorites,
  incPage,
  changeRentalOrderPlus,
  changeRentalOrderMinus,
} = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
