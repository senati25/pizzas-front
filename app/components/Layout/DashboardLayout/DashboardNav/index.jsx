import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { memo } from 'react';
import styles from './styles.module.css';

const DashboardNav = memo(() => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.dashboardNav}>
      {/* <details>
        <summary>das</summary>
        <Link href="/dashboard/administrador/clients">
          <a
            className={`${styles.dashboardNav__link} ${
              pathname.includes('clients') && styles.dashboardNav__link__active
            } `}
          >
            Clientes
          </a>
        </Link>
      </details> */}

      <Link href="/dashboard/administrador/analytics">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('analytics') && styles.dashboardNav__link__active
          } `}
        >
          Analytics
        </a>
      </Link>

      <Link href="/dashboard/administrador/clients">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('clients') && styles.dashboardNav__link__active
          } `}
        >
          Clientes
        </a>
      </Link>

      <Link href="/dashboard/administrador/products">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('products') && styles.dashboardNav__link__active
          } `}
        >
          Productos
        </a>
      </Link>

      <Link href="/dashboard/administrador/categories">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('categories') && styles.dashboardNav__link__active
          } `}
        >
          Categorias
        </a>
      </Link>

      <Link href="/dashboard/administrador/claims">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('claims') && styles.dashboardNav__link__active
          } `}
        >
          Reclamos
        </a>
      </Link>

      <Link href="/dashboard/administrador/users">
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
