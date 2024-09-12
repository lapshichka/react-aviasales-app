import { StateSchema } from 'app/providers/StoreProvider';

export const getStatus = (state: StateSchema) => state.ticket.status;
