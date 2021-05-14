import Link from 'next/link';
import useDashboardContext from '../../../hooks/useDashboardContext';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import CategoryTable from './CategoryTable';
import styles from './styles.module.css';

const Categories = () => {
  const dashboardContext = useDashboardContext();

  return (
    <>
      {dashboardContext?.categories ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Categorias</h1>
          <Link href="/dashboard/administrador/categories/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <CategoryTable categories={dashboardContext?.categories} />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Categories;
