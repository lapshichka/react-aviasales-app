import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from 'entities/Filters';
import { tabsReducer } from 'entities/Tabs/model/slice/tabsSlice';
import { StateSchema } from './StateSchema';

const rootReducer = combineReducers({
  filters: filterReducer,
  tabs: tabsReducer,
});

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
