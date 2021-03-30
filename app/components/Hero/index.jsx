import Image from 'next/image';
import styles from './styles.module.css';

const Hero = () => {
  return (
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
          Ven a <strong>InViaggios</strong> donde disfrutaras de las pizzas mas
          deliciosas
        </h1>
        <div>
          <Image
            alt="pizza combo"
            src="/images/combo-hero.png"
            width={300}
            height={330}
            layout="intrinsic"
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
};

export default Hero;
