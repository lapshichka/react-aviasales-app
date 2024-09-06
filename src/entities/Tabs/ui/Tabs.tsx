import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Tabs.module.scss';
import { tabsActions } from '../model/slice/tabsSlice';
import { getTab } from '../model/selectors/getTab';

interface TabsData {
  name: string,
  label: string,
}
export const Tabs: React.FC = () => {
  const dispatch = useDispatch();
  const tab = useSelector(getTab);

  const data: TabsData[] = [
    { name: 'cheap', label: 'Самый дешевый' },
    { name: 'fast', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ];

  const handleTabChange = (tab: string) => {
    dispatch(tabsActions.onTabChange(tab));
  };

  return (
    <ul className={`${cls.tab__list} card-them`}>
      {
        data.map(({ name, label }) => {
          const isActive = name === tab;
          const className = isActive ? 'selected' : null;

          return (
            <li key={name} className={`${cls.tab__item} ${className}`}>
              <button type="button" onClick={() => handleTabChange(name)}>
                {label}
              </button>
            </li>
          );
        })
      }
    </ul>
  );
};
