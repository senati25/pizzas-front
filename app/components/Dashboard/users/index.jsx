import Link from 'next/link';
import { React } from 'react';
import useUsers from '../../../hooks/useUsers';
import UsersTable from './UsersTable';

import styles from './style.module.css';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import useDashboardContext from '../../../hooks/useDashboardContext';

const Users = () => {
  const { deleteItem, editItem } = useUsers();
  const dashboardContext = useDashboardContext();
  return (
    <>
      {dashboardContext?.users ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Usuarios</h1>
          <Link href="/admin/users/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <UsersTable
            deleteItem={deleteItem}
            editItem={editItem}
            users={dashboardContext?.users}
          />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Users;
