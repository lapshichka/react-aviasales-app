import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from 'features/FiltersPanel';
import { tabsReducer } from 'features/TabSelector';
import { ticketReducer } from 'entities/ticket/TicketList';
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
