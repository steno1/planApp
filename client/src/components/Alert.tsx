import React from 'react';
import { useAppContext } from '../context/AppContext';

const Alert: React.FC = () => {
  const appContext = useAppContext();
  const { alertType, alertText } = appContext?.state || {};

  return (
    <div className={`alert alert-${alertType}`}>
      {alertText}
    </div>
  );
};

export default Alert;
