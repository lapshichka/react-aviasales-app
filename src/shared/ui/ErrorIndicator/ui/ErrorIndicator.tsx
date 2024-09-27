import React from 'react';
import styles from './ErrorIndicator.module.scss';

interface ErrorIndicatorProps {
  title: string,
  message: string,
}
const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({ title, message }) => (
  <div className={styles.error}>
    <span className={styles.error__title}>{title}</span>
    <span className={styles.error__message}>{message}</span>
  </div>
);

export default ErrorIndicator;
