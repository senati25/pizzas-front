import PropTypes from 'prop-types';
import { useState } from 'react';
import Head from 'next/head';
import SideMenu from './SideMenu';
import Header from './Header';
import styles from './styles.module.css';

const DashboardLayout = ({ children }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Inviaggio Dashboard</title>
        <link rel="icon" href="/images/brand-logo.png" />
      </Head>

      <div
        className={`${styles.sideMenuWrapper} ${
          sideMenuOpen ? styles.sideMenuOpen : null
        }`}
      >
        <SideMenu setSideMenuOpen={setSideMenuOpen} />
      </div>

      <div className={styles.layout__content}>
        <Header
          className={styles.layout__header}
          setSideMenuOpen={setSideMenuOpen}
        />

        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
};

const elementOrArrayOfElementPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
]);

DashboardLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(elementOrArrayOfElementPropType),
    elementOrArrayOfElementPropType,
  ]).isRequired,
};

export default DashboardLayout;
