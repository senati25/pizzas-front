import Link from 'next/link';

import useDashboardContext from '../../../hooks/useDashboardContext';
import ProductsTable from './ProductsTable';
import SpinnerDashboard from '../../shared/SpinnerDashboard';

import styles from './style.module.css';
import ContentLayout from '../../shared/ContentLayout';
import HeaderPageDashboard from '../../shared/HeaderPageDashboard';

const Products = () => {
  const dashboardContext = useDashboardContext();

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Productos" />
      {dashboardContext?.administrador?.products ? (
        <div className={styles.table__wrapper}>
          <Link href="products/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <ProductsTable products={dashboardContext?.administrador?.products} />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </ContentLayout>
  );
};

export default Products;
