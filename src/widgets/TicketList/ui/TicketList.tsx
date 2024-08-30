import React from 'react';
import { Ticket } from 'widgets/Ticket/ui/Ticket';
import { Flight } from 'shared/types/common';
import { styles } from 'widgets/MainContent';

export const TicketList: React.FC = () => {
  const data: Flight[] = [
    {
      id: 1,
      price: 13400,
      airline: 'Arlines',
      details: [
        [
          { title: 'mow-hkt', text: '10:45 - 08:00' },
          { title: 'mow-hkt', text: '10:45 - 08:00' },
        ],
        [
          { title: 'в пути', text: '21ч 15м' },
          { title: 'в пути', text: '13ч 30м' },
        ],
        [
          { title: '2 пересадки', text: 'HGK, JNB' },
          { title: '1 пересадки', text: 'HGK' },
        ],
      ],
    },
    {
      id: 2,
      price: 13400,
      airline: 'Arlines',
      details: [
        [
          { title: 'mow-hkt', text: '10:45 - 08:00' },
          { title: 'mow-hkt', text: '10:45 - 08:00' },
        ],
        [
          { title: 'в пути', text: '21ч 15м' },
          { title: 'в пути', text: '13ч 30м' },
        ],
        [
          { title: '2 пересадки', text: 'HGK, JNB' },
          { title: '1 пересадки', text: 'HGK' },
        ],
      ],
    },
    {
      id: 3,
      price: 13400,
      airline: 'Arlines',
      details: [
        [
          { title: 'mow-hkt', text: '10:45 - 08:00' },
          { title: 'mow-hkt', text: '10:45 - 08:00' },
        ],
        [
          { title: 'в пути', text: '21ч 15м' },
          { title: 'в пути', text: '13ч 30м' },
        ],
        [
          { title: '2 пересадки', text: 'HGK, JNB' },
          { title: '1 пересадки', text: 'HGK' },
        ],
      ],
    },
  ];

  const ticket = data.map(({
    id, price, airline, details,
  }) => (
    <li key={id} className={`${styles.ticket__item} card-them`}>
      <div className={styles.ticket__header}>
        <span className={`${styles.ticket__price} large-text`}>
          {price}
          P
        </span>
        <span className="ticket__airline">{airline}</span>
      </div>

      <Ticket details={details} />
    </li>
  ));

  return (
    <ul className={styles.ticket__list}>{ticket}</ul>
  );
};
