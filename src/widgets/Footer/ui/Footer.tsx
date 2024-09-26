import React from 'react';
import { InfoLink } from 'shared';
import Telegram from 'shared/assets/icons/icon-telegram.svg';
import Github from 'shared/assets/icons/icon-github.svg';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className="footer__container">
      <h2 className={styles.footer__title}>Контакты</h2>

      <div className={styles.footer__contact}>
        <InfoLink text="+7 (977) 496-87-32" href="tel:+79774968732" />
        <InfoLink text="lapshiichka@mail.ru" href="mailto:lapshiichka@mail.ru" />

        <div className={styles.footer__social}>
          <InfoLink href="https://t.me/lapshiichkaa"><Telegram /></InfoLink>
          <InfoLink href="https://github.com/lapshichka"><Github /></InfoLink>
        </div>
      </div>
    </div>
  </footer>
);
