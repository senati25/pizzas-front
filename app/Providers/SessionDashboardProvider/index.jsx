import useSWR from 'swr';
import { array, object, oneOfType } from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SessionDashboardContext from '../../context/SessionDashboardContext';
import DashboardProvider from '../DashboardProvider';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import Login from '../../components/Dashboard/Login';

const SessionDashboardProvider = ({ children }) => {
  const router = useRouter();
  const { data: session, mutate: mutateSession } = useSWR(
    '/api/user-dashboard'
  );

  const handleRefreshSession = () => {};

  useEffect(() => {
    if (session && session.rutas) {
      const routeRol = router.pathname
        .split('/')
        .filter((value) => value.length !== 0)[1];

      if (!session.rutas.some(({ raiz }) => raiz === routeRol)) {
        router.replace(`/dashboard/${session.rol}/home`);
      }
      console.log(session.rutas);
    }
  }, [router.pathname, session]);

  return (
    <SessionDashboardContext.Provider
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
    </SessionDashboardContext.Provider>
  );
};

SessionDashboardProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default SessionDashboardProvider;
