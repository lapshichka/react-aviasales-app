import { FiltersSchema } from 'entities/Filters';
import { TabsSchema } from 'entities/Tabs';
import { TicketSchema } from 'entities/Ticket';

export interface StateSchema {
  filters: FiltersSchema,
  tabs: TabsSchema,
  ticket: TicketSchema
}
