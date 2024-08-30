import React from 'react';
import cls from './Filters.module.scss';

interface FiltersData {
  name: string,
  label: string,
}
export const Filters: React.FC = () => {
  const data: FiltersData[] = [
    { name: 'all', label: 'Все' },
    { name: 'nonstop', label: 'Без пересадок' },
    { name: 'one', label: '1 пересадка' },
    { name: 'two', label: '2 пересадки' },
    { name: 'three', label: '3 пересадки' },
  ];

  const filters = data.map(({ name, label }) => (
    <li className={cls.filter__item} key={name}>
      <label htmlFor="name" className={cls.filter__content}>
        <input type="checkbox" />
        {label}
      </label>
    </li>
  ));

  return <ul className={cls.filter__list}>{filters}</ul>;
};
