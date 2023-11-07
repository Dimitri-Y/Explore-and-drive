import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFavorites = state => state.adverts.favorites;

export const selectPage = state => state.adverts.page;

export const selectTotalLimit = state => state.adverts.totalLimit;

export const selectVisibleAdverts = createSelector(
  [selectAdverts, selectFilter],
  (adverts, filter) => {
    return adverts?.filter(advert => {
      const cleanPrice = parseInt(filter.price.replace(/[^0-9]/g, ''));
      const advertCleanPrice =
        advert.rentalPrice &&
        parseInt(advert.rentalPrice.replace(/[^0-9]/g, ''));
      if (filter.make !== '' && advert.make !== filter.make) {
        return false;
      }
      if (filter.price !== '' && advertCleanPrice > cleanPrice) {
        return false;
      }
      if (filter.from >= 0 && filter.to !== 0) {
        if (filter.from <= advert.mileage && filter.to >= advert.mileage)
          return true;
        else return false;
      }
      return true;
    });
  }
);

export const MAKES = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
];
