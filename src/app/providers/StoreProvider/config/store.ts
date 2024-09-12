import { tabsReducer } from 'entities/Tabs/model/slice/tabsSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from 'entities/Filters';
import { ticketReducer } from 'entities/Ticket';
import { StateSchema } from './StateSchema';

const rootReducer = combineReducers({
  filters: filterReducer,
  tabs: tabsReducer,
  ticket: ticketReducer,
});

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
