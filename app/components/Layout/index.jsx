import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import styles from './styles.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Pizzas</title>
      <link rel="icon" href="/images/brand-logo.png" />
    </Head>

    <Header />

    <main className={styles.mainContent}>{children}</main>

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
