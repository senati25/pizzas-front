import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import styles from './styles.module.css';

const PublicLayout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Inviaggio Pizzeria</title>
      <link rel="icon" href="/images/brand-logo.png" />
    </Head>

    <Header />

    <main className={styles.mainContent}>{children}</main>

    <Footer />
  </div>
);

const elementOrArrayOfElementPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
]);

PublicLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(elementOrArrayOfElementPropType),
    elementOrArrayOfElementPropType,
  ]).isRequired,
};

export default PublicLayout;
