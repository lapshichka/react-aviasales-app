import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TabsSchema } from '../types/TabsSchema';

const initialState: TabsSchema = {
  tab: '',
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    onTabChange: (state, action: PayloadAction<string>) => {
      state.tab = action.payload;
    },
  },
});

export const { actions: tabsActions } = tabsSlice;
export const { reducer: tabsReducer } = tabsSlice;
