import React from 'react';
import { useSelector } from 'react-redux';
import { getFilters } from '../model/selectors/getFilters';
import { FilterNames } from '../model/types/FiltersSchema';
import cls from './Filters.module.scss';

interface FilterItemProps {
  name: FilterNames,
  label: string,
  onChange: (filter?: FilterNames) => void,
}

export const FilterItem: React.FC<FilterItemProps> = ({ name, label, onChange }) => {
  const filters = useSelector(getFilters);

  return (
    <label htmlFor={name} className={cls.filter__content}>
      <input
        type="checkbox"
        checked={filters[name]}
        onClick={() => onChange(name)}
      />
      {label}
    </label>
  );
};
