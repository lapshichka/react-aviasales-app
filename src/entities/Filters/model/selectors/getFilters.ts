import { StateSchema } from 'app/providers/StoreProvider';

export const getFilters = (state: StateSchema) => state.filters;
