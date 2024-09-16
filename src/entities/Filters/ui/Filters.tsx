import React from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from '../model/slice/filtersSlice';
import { FilterItem } from './FilterItem';
import cls from './Filters.module.scss';
import { FilterNames, FiltersData } from '../model/types/FiltersSchema';

export const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const updateFilter = (filter: FilterNames) => dispatch(filterActions.switchFilter(filter));

  const data: FiltersData[] = [
    {
      name: FilterNames.all,
      label: 'Все',
      action: () => dispatch(filterActions.switchAllFilter()),
    },
    {
      name: FilterNames.noTransfers,
      label: 'Без пересадок',
      action: updateFilter,
    },
    {
      name: FilterNames.oneTransfer,
      label: '1 пересадка',
      action: updateFilter,
    },
    {
      name: FilterNames.twoTransfer,
      label: '2 пересадки',
      action: updateFilter,
    },
    {
      name: FilterNames.threeTransfer,
      label: '3 пересадки',
      action: updateFilter,
    },
  ];

  return (
    <ul className={cls.filter__list}>
      {
        data.map(({ name, label, action }) => (
          <li className={cls.filter__item} key={name}>
            <FilterItem name={name} label={label} onChange={action} />
          </li>
        ))
      }
    </ul>
  );
};
