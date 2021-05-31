import Link from 'next/link';
import UsersTable from './UsersTable';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import useDashboardContext from '../../../hooks/useDashboardContext';
import styles from './style.module.css';
import ContentLayout from '../../shared/ContentLayout';
import HeaderPageDashboard from '../../shared/HeaderPageDashboard';

const Users = () => {
  const dashboardContext = useDashboardContext();
  return (
    <ContentLayout>
      <HeaderPageDashboard title="Usuarios" />

      {dashboardContext?.administrador?.users ? (
        <div className={styles.table__wrapper}>
          <Link href="users/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <UsersTable users={dashboardContext?.administrador?.users} />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </ContentLayout>
  );
};

export default Users;
