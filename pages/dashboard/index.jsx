import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SpinnerDashboard from '../../app/components/shared/SpinnerDashboard';

const dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard/administrador/administrador');
  }, []);

  return <SpinnerDashboard />;
};

export default dashboard;
