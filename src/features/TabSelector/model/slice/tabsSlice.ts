import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TabsSchema } from '../types/TabsSchema';

const initialState: TabsSchema = {
  tab: undefined,
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    onTabChange: (state, { payload }: PayloadAction<string>) => {
      if (state.tab === payload) {
        state.tab = undefined;
      } else {
        state.tab = payload;
      }
    },
  },
});

export const { actions: tabsActions } = tabsSlice;
export const { reducer: tabsReducer } = tabsSlice;
