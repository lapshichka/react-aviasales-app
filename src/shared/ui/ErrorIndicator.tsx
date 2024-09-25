import React from 'react';

interface ErrorIndicatorProps {
  title: string,
  message: string,
}
const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({ title, message }) => (
  <div className="error">
    <span className="error__title">{title}</span>
    <span className="error__message">{message}</span>
  </div>
);

export default ErrorIndicator;
