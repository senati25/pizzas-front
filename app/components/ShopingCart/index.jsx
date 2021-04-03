import Image from 'next/image';
import styles from './styles.module.css';

const ShopingCart = () => (
  <div className={styles.shopingCart__wrapper}>
    <div className={styles.shopingCart}>
      <h2 className={styles.shopingCart__title}>Carrito</h2>

      <div className={styles.shopingCart__content}>
        <div className={styles.listProductsGrid}>
          {[1, 2, 3, 4, 5, 6].map((product) => (
            <div key={product} className={styles.listProductsGrid__item}>
              <div className={styles.product__img}>
                <Image
                  src="https://static.phdvasia.com/br/menu/combo/desktop_thumbnail_659ca17b-5b4c-407d-b8fc-cb763274d623.png"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </div>
              <span>x5</span>
              <span>Meat Lovers</span>
              <span>S/ 58.00</span>
            </div>
          ))}
        </div>

        <div className={styles.shopingCart__sidebar}>
          <p className={styles.sidebar__paragraph}>Total S/ 145.00</p>
          <button className={styles.sidebar__button} type="button">
            Completar orden
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ShopingCart;
