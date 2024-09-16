import React from 'react';
import { TicketDetailsProps } from 'shared/types/common';
import { styles } from 'widgets/MainContent';
import { format } from 'date-fns';

export const TicketDetails: React.FC<{details: TicketDetailsProps}> = ({ details }) => {
  const {
    date, destination, duration, origin, stops,
  } = details;

  const transfers: string[] = ['1 пересадка', '2 пересадки', '3 пересадки'];

  const departureDate = new Date(date);
  const minutesFlight = new Date(0);
  minutesFlight.setUTCHours(0, duration, 0, 0);

  const hours = minutesFlight.getUTCHours();
  const minutes = minutesFlight.getUTCMinutes();

  const arriverTime = new Date(0)
    .setHours(departureDate.getHours() + hours, departureDate.getMinutes() + minutes);

  return (
    <div className={styles.ticket__info_details}>
      <div className={styles.block_text}>
        <span className={styles.block_text__title}>{`${origin} - ${destination}`}</span>
        <span className={styles.block_text__text}>
          {`${format(departureDate, 'hh:mm')} - ${format(arriverTime, 'hh:mm')}`}
        </span>
      </div>

      <div className={styles.block_text}>
        <span className={styles.block_text__title}>В пути</span>
        <span className={styles.block_text__text}>
          {`${String(hours).padStart(2, '0')}ч ${String(minutes).padStart(2, '0')}м`}
        </span>
      </div>

      {
        stops.length > 0
          ? (
            <div className={styles.block_text}>
              <span className={styles.block_text__title}>{transfers[stops.length - 1]}</span>
              <span className={styles.block_text__text}>{stops.join(', ')}</span>
            </div>
          ) : (
            <div className={styles.block_text} />
          )
      }
    </div>
  );
};
