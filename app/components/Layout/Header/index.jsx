import Image from 'next/image';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import ROUTES from '../../../helpers/constants';
import useShoppingCartContext from '../../../hooks/useShoppingCartContext';

import Nav from '../Nav';
import styles from './styles.module.css';

const Header = memo(() => {
  const { shoppingCartProducts } = useShoppingCartContext();

  const cantidad = useMemo(() => shoppingCartProducts.length, [
    shoppingCartProducts.length,
  ]);

  return (
    <header className={styles.mainHeader}>
      <Link href={ROUTES.public.home}>
        <a>
          <Image
            alt="brand logo"
            src="/images/brand-logo.png"
            width={70}
            height={70}
          />
        </a>
      </Link>
      <Nav />
      <ul className={styles.listNavIcons}>
        <li>
          <Link href="/login">
            <a className={styles.registerUserIcon}>
              <i className="fas fa-user fa-2x"></i>
              <span> </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/${ROUTES.public.shoppingCart}`}>
            <a className={styles.shoppingCartIcon}>
              <i className="fas fa-shopping-cart fa-2x"></i>
              <span className={styles.shoppingCartBadge}>{cantidad || 0}</span>
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
});

export default Header;
