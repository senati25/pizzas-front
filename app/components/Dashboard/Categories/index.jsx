import Link from 'next/link';
import useDashboardContext from '../../../hooks/useDashboardContext';
import ContentLayout from '../../shared/ContentLayout';
import HeaderPageDashboard from '../../shared/HeaderPageDashboard';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import CategoryTable from './CategoryTable';
import styles from './styles.module.css';

const Categories = () => {
  const dashboardContext = useDashboardContext();

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Categorias" />
      {dashboardContext?.administrador?.categories ? (
        <div className={styles.table__wrapper}>
          <Link href="/dashboard/administrador/categories/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <CategoryTable
            categories={dashboardContext?.administrador?.categories}
          />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </ContentLayout>
  );
};

export default Categories;
