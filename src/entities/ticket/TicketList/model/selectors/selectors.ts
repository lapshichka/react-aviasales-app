import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { TicketData } from '../types/TicketSchema';

export const selectedActiveFilter = (state: StateSchema) => state.filters;
export const selectadActiveTab = (state: StateSchema) => state.tabs.tab;
export const selectedAllTickets = (state: StateSchema) => state.ticket.displayTickets;

export const selectTodosByFilter = createSelector(
  [selectedAllTickets, selectedActiveFilter, selectadActiveTab],
  (allTickets, activeFilter, activeTab) => {
    const allowedTransfers: number[] = [];
    let filtered: TicketData[] = [...allTickets];

    if (activeFilter.noTransfers) allowedTransfers.push(0);
    if (activeFilter.oneTransfer) allowedTransfers.push(1);
    if (activeFilter.twoTransfer) allowedTransfers.push(2);
    if (activeFilter.threeTransfer) allowedTransfers.push(3);

    if (allowedTransfers.length > 0) {
      filtered = filtered
        .filter(({ segments }) => segments.every(({ stops }) => allowedTransfers.includes(stops.length)));
    }

    if (activeTab === 'cheap') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeTab === 'fast') {
      filtered.sort((a, b) => a.segments.reduce((sum, seg) => sum + seg.duration, 0)
        - b.segments.reduce((sum, seg) => sum + seg.duration, 0));
    }

    return filtered;
  },
);
