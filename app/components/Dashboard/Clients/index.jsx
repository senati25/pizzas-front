import Link from 'next/link';

import useDashboardContext from '../../../hooks/useDashboardContext';
import useClients from '../../../hooks/useClients';
import ClientsTable from './ClientTable';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import styles from './style.module.css';

const Clients = () => {
  const { clients } = useDashboardContext();
  const { handleDeleteClient } = useClients();

  return (
    <>
      {clients ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Clientes</h1>
          <Link href="/admin/clients/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <ClientsTable
            handleDeleteClient={handleDeleteClient}
            clients={clients}
          />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Clients;
