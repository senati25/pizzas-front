import Link from 'next/link';
import UsersTable from './UsersTable';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import useDashboardContext from '../../../hooks/useDashboardContext';
import styles from './style.module.css';

const Users = () => {
  const dashboardContext = useDashboardContext();
  return (
    <>
      {dashboardContext?.users ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Usuarios</h1>
          <Link href="users/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <UsersTable users={dashboardContext?.users} />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Users;
