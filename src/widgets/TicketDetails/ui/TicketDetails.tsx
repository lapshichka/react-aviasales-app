import React from 'react';
import { Detail } from 'shared/types/common';
import { styles } from 'widgets/MainContent';

export const TicketDetails: React.FC<{details: Detail[]}> = ({ details }) => (
  <div className={styles.ticket__info_details}>
    {details.map(({ title, text }) => (
      <div className={styles.block_text}>
        <span className={styles.block_text__title}>{title}</span>
        <span className={styles.block_text__text}>{text}</span>
      </div>
    ))}
  </div>
);
