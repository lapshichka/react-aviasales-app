import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { DetailItem } from 'shared/ui/DetailItem';
import styles from './TicketDetails.module.scss';

interface TicketDetailsProps {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}
export const TicketDetails: React.FC<{details: TicketDetailsProps}> = ({ details }) => {
  const {
    date, destination, duration, origin, stops,
  } = details;

  const transfers: string[] = ['1 пересадка', '2 пересадки', '3 пересадки'];

  const departureDate = useMemo(() => new Date(date), [date]);

  const minutesFlight = new Date(0);
  minutesFlight.setUTCHours(0, duration, 0, 0);

  const hours = minutesFlight.getUTCHours();
  const minutes = minutesFlight.getUTCMinutes();

  const arriverTime = useMemo(() => new Date(0)
    .setHours(departureDate.getHours() + hours, departureDate.getMinutes() + minutes), [departureDate, hours, minutes]);

  const formattedDeparture = useMemo(() => format(departureDate, 'hh:mm'), [departureDate]);
  const formattedArriver = useMemo(() => format(arriverTime, 'hh:mm'), [arriverTime]);

  return (
    <div className={styles.ticket__info_details}>
      <DetailItem
        title={`${origin} - ${destination}`}
        text={`${formattedDeparture} - ${formattedArriver}`}
      />

      <DetailItem
        title="В пути"
        text={`${String(hours).padStart(2, '0')}ч ${String(minutes).padStart(2, '0')}м`}
      />

      {
        stops.length > 0
          ? (
            <DetailItem
              title={transfers[stops.length - 1]}
              text={stops.join(', ')}
            />
          ) : (
            <DetailItem />
          )
      }
    </div>
  );
};
