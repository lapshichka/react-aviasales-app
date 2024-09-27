import React from 'react';
import { useSelector } from 'react-redux';
import { FiltersPanel } from 'features/FiltersPanel';
import { TabSelector } from 'features/TabSelector';
import {
  getError, getStatus, TicketList,
} from 'entities/ticket/TicketList';
import { Loader } from 'shared/ui/Loader';
import { ErrorIndicator } from 'shared/ui/ErrorIndicator';
import cls from './MainContent.module.scss';

export const MainContent = () => {
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  return (
    <main className="main">
      <div className={cls.main__container}>
        <div className={cls.filter}>
          <h3 className={cls.filter__title}>Количество пересадок</h3>
          <FiltersPanel />
        </div>

        <div className={cls.tab}>
          <TabSelector />
        </div>

        <div className={cls.ticket}>
          {status === 'loading' && (<div className={cls.ticket__loader}><Loader /></div>)}
          {status === 'rejected' && <ErrorIndicator title={error.name} message={error.message} />}
          <TicketList />
        </div>
      </div>
    </main>
  );
};
