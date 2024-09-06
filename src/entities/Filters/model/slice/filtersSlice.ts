import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersSchema } from '../types/FiltersSchema';

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
    changeFilter: (state, action: PayloadAction<string>) => {
      const filterKey = action.payload as keyof FiltersSchema;
      if (filterKey in state) {
        state[filterKey] = !state[filterKey];

        const keys = Object.keys(state);

        if (filterKey === 'all' && state.all) {
          keys.forEach((key) => {
            state[key as keyof FiltersSchema] = true;
          });
        } else if (filterKey === 'all' && !state.all) {
          keys.forEach((key) => {
            state[key as keyof FiltersSchema] = false;
          });
        } else {
          const allFiltersOn = keys.every((key) => {
            if (key === 'all') return true;
            return state[key as keyof FiltersSchema];
          });

          state.all = allFiltersOn;
        }
      }
    },
  },
});

export const { actions: filterActions } = filtersSlice;
export const { reducer: filterReducer } = filtersSlice;
