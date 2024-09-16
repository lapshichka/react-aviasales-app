import React, { useEffect } from 'react';
import {
  fetchSearchId, fetchTickets, getTicket, Ticket,
} from 'entities/Ticket';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from 'widgets/MainContent';

export const TicketList: React.FC = () => {
  const dispatch = useDispatch();
  const tickrts = useSelector(getTicket);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSearchId());
      dispatch(fetchTickets());
    };

    fetchData();
  }, []);

  let i = 0;
  return (
    <ul className={styles.ticket__list}>
      {tickrts.map(({ price, carrier, segments }) => {
        i += 1;
        return (
          <li key={i} className={`${styles.ticket__item} card-them`}>
            <div className={styles.ticket__header}>
              <span className="large-text">
                {`${price.toLocaleString('ru-RU')} P`}
              </span>
              <img
                src={`https://pics.avs.io/99/36/${carrier}.png`}
                alt="Авиакомпания"
                width="110px"
                height="36px"
              />
            </div>

            <Ticket details={segments} />
          </li>
        );
      })}
    </ul>
  );
};
