import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SpinnerDashboard from '../../app/components/shared/SpinnerDashboard';
import useSessionDashboardContext from '../../app/hooks/useSessionDashboardContext';

const dashboard = () => {
  const {
    session: { rol, rutas },
  } = useSessionDashboardContext();
  const router = useRouter();
  useEffect(() => {
    console.log({ rutas });
    router.push(`/dashboard/${rol}/home`);
  }, []);

  return <SpinnerDashboard />;
};

export default dashboard;
