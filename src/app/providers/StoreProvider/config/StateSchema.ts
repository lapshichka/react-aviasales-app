import { TicketSchema } from 'entities/ticket/TicketList';
import { FiltersSchema } from 'features/FiltersPanel';
import { TabsSchema } from 'features/TabSelector';

export interface StateSchema {
  filters: FiltersSchema,
  tabs: TabsSchema,
  ticket: TicketSchema
}
