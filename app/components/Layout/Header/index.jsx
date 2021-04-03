import Image from 'next/image';
import Link from 'next/link';
import useShoppingCart from '../../../hooks/useShoppingCart';
import Nav from '../Nav';
import styles from './styles.module.css';

const Header = () => {
  const { shoppingCartList } = useShoppingCart();
  return (
    <header className={styles.mainHeader}>
      <Link href="/">
        <a className={styles.mainHeader__logo}>
          <Image
            alt="brand logo"
            src="/images/brand-logo.png"
            width={70}
            height={70}
          />
        </a>
      </Link>

      <Nav />

      <ul>
        <li>
          <Link href="/shoping-cart">
            <a className={styles.shoppingCartIcon}>
              <i className="fas fa-shopping-cart fa-2x"></i>
              <span className={styles.shoppingCartBadge}>
                {shoppingCartList.length}
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
