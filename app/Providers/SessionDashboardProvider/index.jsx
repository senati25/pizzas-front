import { array, object, oneOfType } from 'prop-types';
import React, { useEffect, useState } from 'react';
import Login from '../../components/Dashboard/Login';
import sessionDashboardContext from '../../context/sessionDashboardContext';

const isServer = () => typeof window === 'undefined';

const SessionDashboardProvider = ({ children }) => {
  const [state, setState] = useState(
    !isServer() ? JSON.parse(localStorage.getItem('session')) : null
  );

  const handleRefreshSession = () => {};

  useEffect(() => {
    if (!isServer()) {
      localStorage.setItem('session', JSON.stringify(state));
    }
  }, [state]);

  return (
    <sessionDashboardContext.Provider
      value={{
        session: state,
        setSession: setState,
        refreshSession: handleRefreshSession,
      }}
    >
      {!state ? <Login /> : children}
    </sessionDashboardContext.Provider>
  );
};

SessionDashboardProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default SessionDashboardProvider;
