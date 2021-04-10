import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import ROUTES from '../../../helpers/constants';
import styles from './styles.module.css';

const DashboardNav = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <nav className={styles.dashboardNav}>
      <Link
        href={`/${ROUTES.dashboard.root}/${ROUTES.dashboard.categories.root}`}
      >
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('categories') && styles.dashboardNav__link__active
          } `}
        >
          Categorias
        </a>
      </Link>

      <Link href="/admin/products">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('products') && styles.dashboardNav__link__active
          } `}
        >
          Productos
        </a>
      </Link>

      <Link href="/admin/clients">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('clients') && styles.dashboardNav__link__active
          } `}
        >
          Clientes
        </a>
      </Link>
    </nav>
  );
};

export default DashboardNav;
