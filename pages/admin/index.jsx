import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import SpinnerDashboard from '../../app/components/shared/SpinnerDashboard';

const Admin = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/analytics');
  }, []);

  return <SpinnerDashboard />;
};

export default Admin;
