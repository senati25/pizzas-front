import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SpinnerDashboard from '../../../app/components/shared/SpinnerDashboard';

const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/administrador/analytics');
  }, []);

  return <SpinnerDashboard />;
};

export default Admin;
