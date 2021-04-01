import Image from 'next/image';
import styles from './styles.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.hero__sideA}>
      <Image
        alt="food"
        src="/images/hero-side-a.png"
        width={400}
        height={400}
      />
    </div>
    <div className={styles.hero__main}>
      <h1 className={styles.hero__title}>
        Ven a <strong>InViaggios</strong> donde disfrutaras de las pizzas más
        deliciosas
      </h1>
      <div className={styles.main__img}>
        <Image
          src="/images/hero-main.png"
          layout="responsive"
          width={20}
          height={20}
        />
      </div>
    </div>
    <div className={styles.hero__sideB}>
      <Image
        alt="food"
        src="/images/hero-side-b.png"
        width={400}
        height={400}
      />
    </div>
  </section>
);

export default Hero;
