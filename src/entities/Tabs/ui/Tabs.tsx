import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tabsActions } from '../model/slice/tabsSlice';
import { getTab } from '../model/selectors/getTab';
import { TabNames } from '../model/types/TabsSchema';
import cls from './Tabs.module.scss';

interface TabsData {
  name: TabNames,
  label: string,
}
export const Tabs: React.FC = () => {
  const dispatch = useDispatch();
  const tab = useSelector(getTab);

  const data: TabsData[] = [
    { name: TabNames.cheap, label: 'Самый дешевый' },
    { name: TabNames.fast, label: 'Самый быстрый' },
    { name: TabNames.optimal, label: 'Оптимальный' },
  ];

  const handleTabChange = (tab: TabNames) => {
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
              <button
                type="button"
                className={cls.tab__btn}
                onClick={() => handleTabChange(TabNames[name])}
              >
                {label}
              </button>
            </li>
          );
        })
      }
    </ul>
  );
};
