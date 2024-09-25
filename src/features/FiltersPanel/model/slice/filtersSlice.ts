import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterNames, FiltersSchema } from '../types/FiltersSchema';

const initialState: FiltersSchema = {
  all: false,
  noTransfers: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    switchFilter: (state, { payload }: PayloadAction<FilterNames>) => {
      if (payload in state) {
        state[payload] = !state[payload];

        const allFiltersOn = Object.keys(state).every((key: FilterNames) => {
          if (key === 'all') return true;
          return state[key];
        });
        state.all = allFiltersOn;
      }
    },

    switchAllFilter: (state) => {
      const filterAll = !state.all;
      Object.keys(state).forEach((key: FilterNames) => {
        state[key] = filterAll;
      });
      state.all = filterAll;
    },
  },
});

export const { actions: filterActions } = filtersSlice;
export const { reducer: filterReducer } = filtersSlice;
