import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { NoInfer } from '@reduxjs/toolkit/dist/tsHelpers';
import { TicketSchema } from '../types/TicketSchema';
import { fetchSearchId, fetchTickets } from '../services/ticketThunks';

const initialState: TicketSchema = {
  key: undefined,
  tickets: [],
  displayTickets: [],
  currentIndex: 0,
  status: 'loading',
  error: undefined,
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    loadMoreTickets: (state) => {
      const start = state.currentIndex;
      const end = start + 5;
      const newTickets = state.tickets.slice(start, end);

      state.displayTickets = [...state.displayTickets, ...newTickets];
      state.currentIndex += 5;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<TicketSchema>>) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.error = undefined;
        state.status = 'loading';
      })
      .addCase(fetchSearchId.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.key = payload.searchId;
      })
      .addCase(fetchSearchId.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.error = payload;
      })
      .addCase(fetchTickets.pending, (state) => {
        state.error = undefined;
        state.status = 'loading';
      })
      .addCase(fetchTickets.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.tickets = payload;
        state.displayTickets = payload.slice(0, 5);
        state.currentIndex = 5;
      })
      .addCase(fetchTickets.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.error = payload;
      });
  },
});

export const { actions: ticketActions } = ticketSlice;
export const { reducer: ticketReducer } = ticketSlice;
