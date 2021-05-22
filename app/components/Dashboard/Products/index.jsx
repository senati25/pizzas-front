import Link from 'next/link';

import useDashboardContext from '../../../hooks/useDashboardContext';
import ProductsTable from './ProductsTable';
import SpinnerDashboard from '../../shared/SpinnerDashboard';

import styles from './style.module.css';

const Products = () => {
  const dashboardContext = useDashboardContext();

  return (
    <>
      {dashboardContext?.administrador?.products ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Productos</h1>
          <Link href="products/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <ProductsTable products={dashboardContext?.administrador?.products} />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Products;
