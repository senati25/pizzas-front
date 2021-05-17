import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from './styles.module.css';
import SideMenu from './SideMenu';
import Header from './Header';

const DashboardLayout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Inviaggio Dashboard</title>
      <link rel="icon" href="/images/brand-logo.png" />
    </Head>

    <SideMenu className={styles.sideMenu} />
    <div className={styles.layout__content}>
      <Header className={styles.layout__header} />

      <main className={styles.mainContent}>{children}</main>
    </div>
  </div>
);

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
