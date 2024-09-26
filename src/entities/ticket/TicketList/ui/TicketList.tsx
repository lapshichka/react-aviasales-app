import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TicketItem } from 'entities/ticket/TicketItem';
import NoData from 'shared/assets/icons/no-data.svg';
import { Button } from 'shared';
import { fetchSearchId, fetchTickets } from '../model/services/ticketThunks';
import { selectTodosByFilter } from '../model/selectors/selectors';
import { getStatus } from '../model/selectors/getStatus';
import styles from './TicketList.module.scss';
import { ticketActions } from '../model/slice/ticketSlice';

export const TicketList: React.FC = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(selectTodosByFilter);
  const status = useSelector(getStatus);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSearchId());
      dispatch(fetchTickets());
    };

    fetchData();
  }, []);

  const handleLoadMoreTickets = () => {
    dispatch(ticketActions.loadMoreTickets());
  };

  return (
    <ul className={styles.ticket__list}>
      {tickets.map(({ price, carrier, segments }, i) => (
        // eslint-disable-next-line react/no-array-index-key
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

          <TicketItem details={segments} />
        </li>
      ))}
      {status === 'resolved' && tickets.length === 0 && <div style={{ textAlign: 'center' }}><NoData /></div>}
      {status === 'resolved' && tickets.length !== 0 && <Button onClick={handleLoadMoreTickets} />}
    </ul>
  );
};
