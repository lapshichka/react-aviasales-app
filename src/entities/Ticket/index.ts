import { getTicket } from './model/selectors/getTicket';
import { getStatus } from './model/selectors/getStatus';
import { TicketSchema } from './model/types/TicketSchema';
import { fetchSearchId, fetchTickets } from './model/services/ticketThunks';
import { Ticket } from './ui/Ticket';
import { ticketReducer } from './model/slice/ticketSlice';

export {
  Ticket,
  fetchSearchId,
  TicketSchema,
  ticketReducer,
  fetchTickets,
  getTicket,
  getStatus,
};
