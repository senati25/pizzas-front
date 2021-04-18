import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const Header = ({ className }) => (
  <header className={`${styles.dashboardHeader} ${className}`}>
    <Link href="/admin">
      <a>
        <Image
          alt="brand logo"
          src="/images/brand-logo.png"
          width={70}
          height={70}
        />
      </a>
    </Link>
    <h1 className={styles.dashboardHeader__title}>Inviaggio Dashboard</h1>
  </header>
);

Header.defaultProps = { className: '' };

Header.propTypes = { className: PropTypes.string };

export default Header;
