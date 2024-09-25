import { StateSchema } from 'app/providers/StoreProvider';

export const selectadActiveTab = (state: StateSchema) => state.tabs.tab;
