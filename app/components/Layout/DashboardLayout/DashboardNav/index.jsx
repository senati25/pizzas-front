import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { memo } from 'react';
import styles from './styles.module.css';
import ROUTES from '../../../../helpers/constants';

const DashboardNav = memo(() => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.dashboardNav}>
      <Link href="/admin/clients">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('clients') && styles.dashboardNav__link__active
          } `}
        >
          Clientes
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

      <Link href={`/${ROUTES.dashboard.root}/${ROUTES.dashboard.users.root}`}>
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('users') && styles.dashboardNav__link__active
          } `}
        >
          Usuarios
        </a>
      </Link>
    </nav>
  );
});

export default DashboardNav;
