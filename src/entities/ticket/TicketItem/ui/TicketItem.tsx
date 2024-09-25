import React from 'react';
import { TicketDetails } from 'entities/ticket/TicketDetaills';
import styles from './TicketItem.module.scss';

interface TicketDetailsProps {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export const TicketItem: React.FC<{details : TicketDetailsProps[]}> = ({ details }) => (
  <ul className={styles.ticket__info}>
    {details.map((detail, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={i}><TicketDetails details={detail} /></li>
    ))}
  </ul>
);
