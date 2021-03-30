import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import styles from './styles.module.css';

const Header = () => {
  return (
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

      <span>
        <ul>
          <li>
            <Link href="/">
              <a>
                <i className="fas fa-shopping-cart fa-2x"></i>
              </a>
            </Link>
          </li>
        </ul>
      </span>
    </header>
  );
};

export default Header;
