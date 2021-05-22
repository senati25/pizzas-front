import Link from 'next/link';
import useDashboardContext from '../../../hooks/useDashboardContext';
import ClientsTable from './ClientTable';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import styles from './style.module.css';

const Clients = () => {
  const dashboardContext = useDashboardContext();

  return (
    <>
      {dashboardContext?.administrador?.clients ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Clientes</h1>
          <Link href="clients/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <ClientsTable clients={dashboardContext?.administrador?.clients} />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Clients;
