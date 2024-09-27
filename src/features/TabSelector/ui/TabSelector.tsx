import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabSelectButton } from 'shared/ui/TabSelectButton';
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
    <ul className={cls.tab__list}>
      {
        data.map(({ name, label }) => {
          let className = cls.tab__item;
          const isActive = name === tab;
          className = isActive ? cls.tab__item_selected : null;

          return (
            <li key={name} className={`${cls.tab__item} ${className}`}>
              <TabSelectButton
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
