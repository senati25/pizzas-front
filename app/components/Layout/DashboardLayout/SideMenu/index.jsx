import Image from 'next/image';
import PropTypes from 'prop-types';
import CardUserProfile from '../CardUserProfile';
import DashboardNav from '../DashboardNav';
import styles from './styles.module.css';

const SideMenu = ({ setSideMenuOpen }) => (
  <div className={`${styles.sideMenu}`}>
    <header className={styles.header}>
      <span className={styles.header__brand}>
        <Image
          alt="brand logo"
          src="/images/brand-logo.png"
          width={40}
          height={40}
        />
        <h5 className={styles.header__title}>Inviaggio</h5>
      </span>
      <button
        type="button"
        onClick={() => setSideMenuOpen(false)}
        className={styles.closeSideMenuButton}
      >
        <i className="fas fa-times fa-lg"></i>
      </button>
    </header>

    <CardUserProfile />
    <DashboardNav />
  </div>
);

SideMenu.propTypes = { setSideMenuOpen: PropTypes.func.isRequired };

export default SideMenu;
