import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxFilter } from 'shared';
import { FilterNames, FiltersData } from '../model/types/FiltersSchema';
import { selectedActiveFilter } from '../model/selectors/selectedActiveFilter';
import { filterActions } from '../model/slice/filtersSlice';
import cls from './FiltersPanel.module.scss';

export const FiltersPanel: React.FC = () => {
  const dispatch = useDispatch();

  const updateFilter = (filter: FilterNames) => dispatch(filterActions.switchFilter(filter));

  const filters = useSelector(selectedActiveFilter);

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
            <CheckboxFilter
              className={cls.filter__content}
              filters={filters}
              name={name}
              label={label}
              onChange={action}
            />
          </li>
        ))
      }
    </ul>
  );
};
