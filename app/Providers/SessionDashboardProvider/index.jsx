import { array, object, oneOfType } from 'prop-types';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
// import Login from '../../components/Dashboard/Login';
import sessionDashboardContext from '../../context/sessionDashboardContext';
import isServer from '../../helpers/isServer';

const Login = dynamic(() => import('../../components/Dashboard/Login'), {
  ssr: false,
});

const SessionDashboardProvider = ({ children }) => {
  const [state, setState] = useState(
    !isServer() ? JSON.parse(localStorage.getItem('session')) : {}
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
      {state && !isServer() ? <>{children}</> : <Login />}
    </sessionDashboardContext.Provider>
  );
};

SessionDashboardProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default SessionDashboardProvider;
