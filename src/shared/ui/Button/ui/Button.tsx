import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ onClick }) => (
  <button
    type="button"
    className={styles.btn}
    onClick={onClick}
  >
    Показать еще 5 билетов
  </button>
);

export default Button;
