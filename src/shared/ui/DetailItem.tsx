import React from 'react';
import { styles } from 'entities/ticket/TicketDetaills';

interface DetailItemProps {
  title?: string,
  text?: string,
}

const DetailItem: React.FC<DetailItemProps> = ({
  title = '', text = '',
}) => (
  <div className={styles.block_text}>
    <span className={styles.block_text__title}>{title}</span>
    <span className={styles.block_text__text}>{text}</span>
  </div>
);
export default DetailItem;
