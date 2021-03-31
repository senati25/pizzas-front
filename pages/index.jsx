import Head from 'next/head';
import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import Footer from '../app/components/Footer';
import styles from '../styles/Home.module.css';
import Offers from '../app/components/Offers';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzas</title>
        <link rel="icon" href="/images/brand-logo.png" />
      </Head>

      <Header />

      <main className={styles.mainContent}>
        <Hero />
        <Offers />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
