/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { memo, useState } from 'react';
import NavGrid from '../NavGrid';
import styles from './styles.module.css';

const Nav = memo(() => {
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
});

export default Nav;
