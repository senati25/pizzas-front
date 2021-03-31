import Head from 'next/head';
import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import Footer from '../app/components/Footer';
import Offers from '../app/components/Offers';
import styles from '../styles/Home.module.css';

const Home = () => (
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

export default Home;
