import Link from 'next/link';
import useDashboardContext from '../../../hooks/useDashboardContext';
import ClientsTable from './ClientTable';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import styles from './style.module.css';
import ContentLayout from '../../shared/ContentLayout';
import HeaderPageDashboard from '../../shared/HeaderPageDashboard';

const Clients = () => {
  const dashboardContext = useDashboardContext();

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Clientes" />
      {dashboardContext?.administrador?.clients ? (
        <div className={styles.table__wrapper}>
          <Link href="clients/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <ClientsTable clients={dashboardContext?.administrador?.clients} />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </ContentLayout>
  );
};

export default Clients;
