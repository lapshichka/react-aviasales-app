import React from 'react';
import cls from './Tabs.module.scss';

interface TabsData {
  name: string,
  label: string,
}
export const Tabs: React.FC = () => {
  const data: TabsData[] = [
    { name: 'cheap', label: 'Самый дешевый' },
    { name: 'fast', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ];

  const tabs = data.map(({ name, label }) => (
    <li key={name} className={cls.tab__item}>{label}</li>
  ));

  return <ul className={`${cls.tab__list} card-them`}>{tabs}</ul>;
};
