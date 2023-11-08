import { createSlice } from '@reduxjs/toolkit';

const State = {
  isModalActive: false,
};

const isModalActiveSlice = createSlice({
  name: 'filter',
  initialState: State,
  reducers: {
    setIsModal(state, action) {
      state.isModalActive = action.payload;
    },
  },
});

export const { setIsModal } = isModalActiveSlice.actions;
export const isModalActiveReducer = isModalActiveSlice.reducer;
