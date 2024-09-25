import React from 'react';
import { TabNames } from 'features/TabSelector';

interface TabSelectButtonProps {
  className?: string,
  name: TabNames,
  label: string,
  onChange: (tab: TabNames) => void,
}

const TabSelectButton : React.FC<TabSelectButtonProps> = ({
  className = '', name, label, onChange,
}) => (
  <button
    type="button"
    className={className}
    onClick={() => onChange(TabNames[name])}
  >
    {label}
  </button>
);
export default TabSelectButton;
