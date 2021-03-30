import Head from 'next/head';

import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzas</title>
        <link rel="icon" href="/images/brand-logo.png" />
      </Head>
      <Header />

      <div className={styles.mainContent}>
        <Hero />
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
