import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchSearchIdResponse, TicketData } from '../types/TicketSchema';

export const fetchSearchId = createAsyncThunk<fetchSearchIdResponse, void, { rejectValue: string }>(
  'ticket/fetchSearchId',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://aviasales-test-api.kata.academy/search');

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTickets = createAsyncThunk<
  TicketData[],
  number,
  { state: StateSchema; rejectValue: string }>(
    'ticket/fetchTickets',
    async (limit, { getState, rejectWithValue }) => {
      const { ticket } = getState();
      const { key } = ticket;
      let stop = false;

      const fetchAllTickets = async (): Promise<TicketData[]> => {
        try {
          const res = await axios
            .get(`https://aviasales-test-api.kata.academy/tickets?searchId=${key}`);

          if (!res.data) {
            throw new Error('No data');
          }

          if (res.data.stop) {
            return res.data.tickets;
          }
          const moreTickets = await fetchAllTickets();
          stop = res.data.stop;
          return res.data.tickets.concat(moreTickets).slice(0, limit);
        } catch (error) {
          if (error.response?.status === 500) {
            if (!stop) {
              await fetchAllTickets();
            }
            return [];
          }
          throw error;
        }
      };

      try {
        const allTickets = await fetchAllTickets();
        return allTickets;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
  );
