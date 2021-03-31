import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import styles from './styles.module.css';

const Header = () => (
  <header className={styles.mainHeader}>
    <span className={styles.mainHeader__logo}>
      <Image
        alt="brand logo"
        src="/images/brand-logo.png"
        width={70}
        height={70}
      />
    </span>

    <Nav />

    <ul>
      <li>
        <Link href="/">
          <a className={styles.shoppingCartIcon} href="/">
            <i className="fas fa-shopping-cart fa-2x"></i>
          </a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
