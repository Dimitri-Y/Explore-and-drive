import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFavorites = state => state.adverts.favorites;

export const selectVisibleAdverts = createSelector(
  [selectAdverts, selectFilter],
  (adverts, filter) => {
    return adverts;
  }
);
