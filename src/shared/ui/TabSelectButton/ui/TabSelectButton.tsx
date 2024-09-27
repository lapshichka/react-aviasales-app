import React from 'react';
import { TabNames } from 'features/TabSelector';
import styles from './TabSelectButton.module.scss';

interface TabSelectButtonProps {
  name: TabNames,
  label: string,
  onChange: (tab: TabNames) => void,
}

const TabSelectButton : React.FC<TabSelectButtonProps> = ({
  name, label, onChange,
}) => (
  <button
    type="button"
    className={styles.btn}
    onClick={() => onChange(TabNames[name])}
  >
    {label}
  </button>
);
export default TabSelectButton;
