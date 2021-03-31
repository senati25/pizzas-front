import Image from 'next/image';
import styles from './styles.module.css';

const ProductCard = () => (
  <div className={styles.productCard}>
    <Image
      src="https://static.phdvasia.com/br/menu/combo/desktop_thumbnail_659ca17b-5b4c-407d-b8fc-cb763274d623.png"
      layout="responsive"
      width={900}
      height={800}
    />
    <div className={styles.productCard__Content}>
      <h4 className={styles.productCard__title}>DUO HUT CHEESE</h4>
      <p className={styles.productCard__description}>
        2 Pizzas Familiares en cualquier sabor a un precio especial
      </p>
      <button type="button" className={styles.productCard__button}>
        Añadir <span>S/ 52.00</span>
      </button>
    </div>
  </div>
);

export default ProductCard;
