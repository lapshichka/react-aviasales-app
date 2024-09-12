import { StateSchema } from 'app/providers/StoreProvider';

export const getTicket = (state: StateSchema) => state.ticket.tickets;
