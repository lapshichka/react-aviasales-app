import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSearchId, fetchTickets, getLimit, Ticket,
} from 'entities/Ticket';
import { styles } from 'widgets/MainContent';
import { selectTodosByFilter } from 'app/providers/StoreProvider';

export const TicketList: React.FC = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(selectTodosByFilter);
  const limit = useSelector(getLimit);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSearchId());
      dispatch(fetchTickets(limit));
    };

    fetchData();
  }, []);

  let i = 0;
  return (
    <ul className={styles.ticket__list}>
      {tickets.map(({ price, carrier, segments }) => {
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
