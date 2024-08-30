import React from 'react';
import LightIcon from 'shared/assets/icons/light-theme-logo.svg';
import DarkIcon from 'shared/assets/icons/dark-theme-lofo.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={cls.header}>
      <div className={cls.header__container}>
        <div className="header__logo">
          <button type="button" onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};
