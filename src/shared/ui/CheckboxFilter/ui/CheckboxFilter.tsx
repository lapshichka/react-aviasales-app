import React from 'react';
import { FilterNames } from 'features/FiltersPanel/model/types/FiltersSchema';
import styles from './CheckboxFilter.module.scss';

interface CheckboxFilterProps {
  filters: Record<FilterNames, boolean>,
  name: FilterNames,
  label: string,
  onChange: (filter?: FilterNames) => void,
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({
  filters, name, label, onChange,
}) => (
  <label htmlFor={name} className={styles.content}>
    <input
      id={name}
      type="checkbox"
      checked={filters[name]}
      onChange={() => onChange(name)}
    />
    {label}
  </label>
);
export default CheckboxFilter;
