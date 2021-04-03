import Image from 'next/image';
import useShoppingCart from '../../hooks/useShoppingCart';
import styles from './styles.module.css';

const ShopingCart = () => {
  const { shoppingCartList, deleteProduct, totalCost } = useShoppingCart();
  return (
    <div className={styles.shopingCart__wrapper}>
      <div className={styles.shopingCart}>
        <h2 className={styles.shopingCart__title}>Carrito</h2>

        <div className={styles.shopingCart__content}>
          <div className={styles.listProductsGrid}>
            {shoppingCartList.map((product, i) => (
              <div key={product.id} className={styles.listProductsGrid__item}>
                <button
                  type="button"
                  onClick={() => {
                    deleteProduct(i);
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>

                <div className={styles.product__img}>
                  <Image
                    src={product.img}
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                </div>

                <span>{product.quantity}</span>
                <span>{product.name}</span>
                <span>{(product.quantity * product.price).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <form className={styles.shopingCart__form}>
            <p className={styles.form__paragraph}>{totalCost}</p>
            <button className={styles.form__button} type="button">
              Completar orden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
