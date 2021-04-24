import useSWR from 'swr';
import { array, object, oneOfType } from 'prop-types';
import sessionDashboardContext from '../../context/sessionDashboardContext';
import DashboardProvider from '../DashboardProvider';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import Login from '../../components/Dashboard/Login';

const SessionDashboardProvider = ({ children }) => {
  const { data: session, mutate: mutateSession } = useSWR('/api/user');

  const handleRefreshSession = () => {};

  return (
    <sessionDashboardContext.Provider
      value={{
        session,
        mutateSession,
        refreshSession: handleRefreshSession,
      }}
    >
      {session && session?.isLoggedIn ? (
        <DashboardProvider>
          <DashboardLayout>{children}</DashboardLayout>
        </DashboardProvider>
      ) : (
        <>
          <Login />
        </>
      )}
    </sessionDashboardContext.Provider>
  );
};

SessionDashboardProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default SessionDashboardProvider;
