import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabSelectButton } from 'shared';
import { tabsActions } from '../model/slice/tabsSlice';
import { selectadActiveTab } from '../model/selectors/selectadActiveTab';
import { TabNames } from '../model/types/TabsSchema';
import cls from './TabSelector.module.scss';

interface TabsData {
  name: TabNames,
  label: string,
}

export const TabSelector: React.FC = () => {
  const dispatch = useDispatch();
  const tab = useSelector(selectadActiveTab);

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
              <TabSelectButton
                className={cls.tab__btn}
                name={name}
                label={label}
                onChange={handleTabChange}
              />
            </li>
          );
        })
      }
    </ul>
  );
};
