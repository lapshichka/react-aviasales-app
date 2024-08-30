import React from 'react';
import { Filters } from 'widgets/Filters';
import { TicketList } from 'widgets/TicketList';
import { Tabs } from 'widgets/Tabs';
import cls from './MainContent.module.scss';

export const MainContent = () => (
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
          <TicketList />
          <button type="button" className={`${cls.ticket__btn} btn-them`}>Показать еще 5 билетов</button>
        </div>
      </div>
    </div>
  </main>
);
