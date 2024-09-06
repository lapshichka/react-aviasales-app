import { FiltersSchema } from 'entities/Filters';
import { TabsSchema } from 'entities/Tabs';

export interface StateSchema {
  filters: FiltersSchema,
  tabs: TabsSchema
}
