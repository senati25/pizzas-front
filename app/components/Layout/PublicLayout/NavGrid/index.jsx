import Link from 'next/link';
import { memo } from 'react';
import ROUTES from '../../../../helpers/constants';
import styles from './styles.module.css';

const NavGrid = memo(() => (
  <ul className={styles.nav__grid}>
    <li className={styles.nav__gridItem}>
      <Link href={ROUTES.public.home}>
        <a className={styles.nav__link}>Inicio</a>
      </Link>
    </li>

    <li className={styles.nav__gridItem}>
      <Link href={`/${ROUTES.public.products}`}>
        <a className={styles.nav__link}>Productos</a>
      </Link>
    </li>
  </ul>
));

export default NavGrid;
