import UsersTable from './UsersTable';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import useDashboardContext from '../../../hooks/useDashboardContext';

import ContentLayout from '../../shared/ContentLayout';
import HeaderPageDashboard from '../../shared/HeaderPageDashboard';

const Users = () => {
  const dashboardContext = useDashboardContext();

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Usuarios" />
      {dashboardContext?.administrador?.users ? (
        <UsersTable users={dashboardContext?.administrador?.users} />
      ) : (
        <SpinnerDashboard />
      )}
    </ContentLayout>
  );
};

export default Users;
