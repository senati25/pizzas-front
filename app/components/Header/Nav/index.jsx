import { memo, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const NavGrid = memo(() => (
  <ul className={styles.nav__grid}>
    <li className={styles.nav__gridItem}>
      <Link href="/">
        <a className={styles.nav__link}>Inicio</a>
      </Link>
    </li>
    <li className={styles.nav__gridItem}>
      <Link href="/products">
        <a className={styles.nav__link}>Productos</a>
      </Link>
    </li>
    <li className={styles.nav__gridItem}>
      <Link href="/ofertas">
        <a className={styles.nav__link}>Ofertas</a>
      </Link>
    </li>
    <li className={styles.nav__gridItem}>
      <Link href="/contacto">
        <a className={styles.nav__link}>Contacto</a>
      </Link>
    </li>
  </ul>
));

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`${styles.mainHeader__nav} ${isOpen && styles.openNav}`}
        onMouseUp={handleIsOpen}
      >
        <NavGrid />
      </nav>

      <button
        type="button"
        className={`${styles.iconContainer} ${styles.hamburger}`}
        onClick={handleIsOpen}
      >
        <i className="fas fa-bars fa-2x"></i>
      </button>
    </>
  );
};

export default Nav;
