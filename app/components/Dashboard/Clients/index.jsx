import useDashboardContext from '../../../hooks/useDashboardContext';
import ClientsTable from './ClientTable';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import ContentLayout from '../../shared/ContentLayout';
import HeaderPageDashboard from '../../shared/HeaderPageDashboard';

const Clients = () => {
  const dashboardContext = useDashboardContext();

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Clientes" />
      {dashboardContext?.administrador?.clients ? (
        <ClientsTable clients={dashboardContext?.administrador?.clients} />
      ) : (
        <SpinnerDashboard />
      )}
    </ContentLayout>
  );
};

export default Clients;
