import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from './Header';
import styles from './styles.module.css';
import SideMenu from './SideMenu';

const DashboardLayout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Invviaggio Dashboard</title>
      <link rel="icon" href="/images/brand-logo.png" />
    </Head>

    <Header className={styles.layout__header} />

    <div className={styles.layout__content}>
      <SideMenu className={styles.sideMenu} />
      <main className={styles.mainContent}>{children}</main>
    </div>
  </div>
);

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardLayout;
