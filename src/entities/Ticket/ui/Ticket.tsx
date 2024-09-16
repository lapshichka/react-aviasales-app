import React from 'react';
import { styles } from 'widgets/MainContent';
import { TicketDetailsProps } from 'shared/types/common';
import { TicketDetails } from './TicketDetails';

export const Ticket: React.FC<{details : TicketDetailsProps[]}> = ({ details }) => {
  let i = 0;

  return (
    <ul className={styles.ticket__info}>
      {details.map((detail) => {
        i += 1;

        return <li key={i}><TicketDetails details={detail} /></li>;
      })}
    </ul>
  );
};
