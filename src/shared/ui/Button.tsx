import React from 'react';

interface ButtonProps {
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ onClick }) => (
  <button
    type="button"
    className="btn"
    onClick={onClick}
  >
    Показать еще 5 билетов
  </button>
);

export default Button;
