import React from 'react';
import { useSelector } from 'react-redux';
import { FiltersData } from '../index';
import cls from './Filters.module.scss';
import { getFilters } from '../model/selectors/getFilters';

export const FilterItem: React.FC<FiltersData> = ({ name, label, action }) => {
  const filters = useSelector(getFilters);

  return (
    <label htmlFor="name" className={cls.filter__content}>
      <input
        type="checkbox"
        checked={filters[name]}
        onClick={() => action(name)}
      />
      {label}
    </label>
  );
};
