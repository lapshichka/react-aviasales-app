import { StateSchema } from 'app/providers/StoreProvider';

export const getTab = (state: StateSchema) => state.tabs.tab;
