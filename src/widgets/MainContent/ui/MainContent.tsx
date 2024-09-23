import React from 'react';
import { TicketList } from 'features/TicketList';
import { Filters } from 'entities/Filters';
import { Tabs } from 'entities/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { getStatus, ticketActions } from 'entities/Ticket';
import cls from './MainContent.module.scss';

export const MainContent = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);

  return (
    <main className="main">
      <div className={cls.main__container}>
        <div className={`${cls.filter} card-them`}>
          <h3 className={cls.filter__title}>Количество пересадок</h3>
          <Filters />
        </div>

        <div>
          <div className="tab">
            <Tabs />
          </div>
          <div className="ticket">
            {status === 'loading' && <h3>Loading...</h3>}
            {status === 'rejected' && <h3>Error</h3>}
            <TicketList />
            {status === 'resolved' && (
              <button
                type="button"
                className={`${cls.ticket__btn} btn-them`}
                onClick={() => dispatch(ticketActions.addFiveTickets())}
              >
                Показать еще 5 билетов
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
