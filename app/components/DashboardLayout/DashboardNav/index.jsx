import Link from 'next/link';
import React from 'react';
import ROUTES from '../../../helpers/constants';
import styles from './styles.module.css';

const DashboardNav = () => (
  <nav className={styles.dashboardNav}>
    <Link
      href={`/${ROUTES.dashboard.root}/${ROUTES.dashboard.categories.root}`}
    >
      <a
        className={`${styles.dashboardNav__link} ${styles.dashboardNav__link__active}`}
      >
        Categorias
      </a>
    </Link>

    <Link href="/">
      <a className={`${styles.dashboardNav__link} `}>Productos</a>
    </Link>

    <Link href="/">
      <a className={`${styles.dashboardNav__link} `}>Clientes</a>
    </Link>

    <Link href="/">
      <a className={`${styles.dashboardNav__link} `}>SubCategorias</a>
    </Link>
  </nav>
);

export default DashboardNav;
