export interface TicketData {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    }
  ]
}

export interface TicketSchema {
  key: string | undefined,
  tickets: TicketData[],
  limit: number,
  status: 'loading' | 'resolved' | 'rejected',
  error: string | undefined,
}

export interface fetchTicketsResponse {
  stop: boolean;
  tickets: TicketData[];
}

export interface fetchSearchIdResponse {
  searchId: string;
}
