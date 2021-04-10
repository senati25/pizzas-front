import Link from 'next/link';
import { React } from 'react';
import useClients from '../../../hooks/useClientes';
import ClientsTable from './ClientTable';

import styles from './style.module.css';
import SpinnerDashboard from '../../shared/SpinnerDashboard';

const Clients = () => {
  const { clients, isLoading, deleteItem, editItem } = useClients();

  return (
    <>
      {!isLoading ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Clientes</h1>
          <Link href="/admin/clients/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <ClientsTable
            deleteItem={deleteItem}
            editItem={editItem}
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
