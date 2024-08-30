import React from 'react';
import { TicketDetails } from 'widgets/TicketDetails';
import { Detail } from 'shared/types/common';
import { styles } from 'widgets/MainContent';

export const Ticket: React.FC<{details: Detail[][]}> = ({ details }) => (
  <div className={styles.ticket__info}>
    {details.map((detail) => (
      <TicketDetails details={detail} />
    ))}
  </div>
);
