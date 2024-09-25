import React from 'react';
import { FilterNames } from 'features/FiltersPanel/model/types/FiltersSchema';

interface CheckboxFilterProps {
  className?: string,
  filters: Record<FilterNames, boolean>,
  name: FilterNames,
  label: string,
  onChange: (filter?: FilterNames) => void,
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({
  className = '', filters, name, label, onChange,
}) => (
  <label htmlFor={name} className={className}>
    <input
      type="checkbox"
      checked={filters[name]}
      onChange={() => onChange(name)}
    />
    {label}
  </label>
);
export default CheckboxFilter;
