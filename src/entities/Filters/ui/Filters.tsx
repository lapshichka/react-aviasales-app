import React from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from '../model/slice/filtersSlice';
import { FilterNames, FiltersData } from '../index';
import cls from './Filters.module.scss';
import { FilterItem } from './FilterItem';

export const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const data: FiltersData[] = [
    {
      name: FilterNames.all,
      label: 'Все',
      action: (filter: FilterNames) => dispatch(filterActions.allFilterOn(filter)),
    },
    {
      name: FilterNames.noTransfers,
      label: 'Без пересадок',
      action: (filter: FilterNames) => dispatch(filterActions.switchFilter(filter)),
    },
    {
      name: FilterNames.oneTransfer,
      label: '1 пересадка',
      action: (filter: FilterNames) => dispatch(filterActions.switchFilter(filter)),
    },
    {
      name: FilterNames.twoTransfer,
      label: '2 пересадки',
      action: (filter: FilterNames) => dispatch(filterActions.switchFilter(filter)),
    },
    {
      name: FilterNames.threeTransfer,
      label: '3 пересадки',
      action: (filter: FilterNames) => dispatch(filterActions.switchFilter(filter)),
    },
  ];

  return (
    <ul className={cls.filter__list}>
      {
        data.map(({ name, label, action }) => (
          <li className={cls.filter__item} key={name}>
            <FilterItem name={name} label={label} action={action} />
          </li>
        ))
      }
    </ul>
  );
};
