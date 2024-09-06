import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Filters.module.scss';
import { filterActions } from '../model/slice/filtersSlice';
import { getFilters } from '../model/selectors/getFilters';

interface FiltersData {
  name: string,
  label: string,
}
export const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);

  const data: FiltersData[] = [
    { name: 'all', label: 'Все' },
    { name: 'noTransfers', label: 'Без пересадок' },
    { name: 'oneTransfer', label: '1 пересадка' },
    { name: 'twoTransfer', label: '2 пересадки' },
    { name: 'threeTransfer', label: '3 пересадки' },
  ];

  const handleCheckboxChange = (filter: string) => {
    dispatch(filterActions.changeFilter(filter));
  };

  return (
    <ul className={cls.filter__list}>
      {
        data.map(({ name, label }) => (
          <li className={cls.filter__item} key={name}>
            <label htmlFor="name" className={cls.filter__content}>
              <input
                type="checkbox"
                checked={filters[name as keyof typeof filters]}
                onClick={() => handleCheckboxChange(name)}
              />
              {label}
            </label>
          </li>
        ))
      }
    </ul>
  );
};
