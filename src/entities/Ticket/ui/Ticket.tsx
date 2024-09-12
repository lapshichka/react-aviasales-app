import React from 'react';
import { styles } from 'widgets/MainContent';
import { TicketDetailsProps } from 'shared/types/common';
import { TicketDetails } from './TicketDetails';

export const Ticket: React.FC<{details : TicketDetailsProps[]}> = ({ details }) => (
  <div className={styles.ticket__info}>
    {details.map((detail) => (
      <TicketDetails details={detail} />
    ))}
  </div>
);
