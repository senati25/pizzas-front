import useShoppingCart from '../../hooks/useShoppingCart';
import ShoppingCartProductsGrid from './ShoppingCartProductsGrid';
import styles from './styles.module.css';

const ShoppingCart = () => {
  const {
    shoppingCartList,
    deleteProduct,
    totalCost,
    plusOne,
    minusOne,
    handleOnChange,
  } = useShoppingCart();

  return (
    <div className={styles.shopingCart__wrapper}>
      <div className={styles.shopingCart}>
        <h2 className={styles.shopingCart__title}>Carrito</h2>

        <div className={styles.shopingCart__content}>
          <div className={styles.shoppingCartProductsGrid__wrapper}>
            <ShoppingCartProductsGrid
              shoppingCartList={shoppingCartList}
              deleteProduct={deleteProduct}
              plusOne={plusOne}
              minusOne={minusOne}
              handleOnChange={handleOnChange}
            />
          </div>

          <form className={styles.shopingCart__form}>
            <textarea
              placeholder="Dejanos un mensaje"
              name="message"
              id=""
              // cols="0"
              rows="5"
              maxLength="250"
            ></textarea>
            <p className={styles.form__paragraph}>S/ {totalCost}</p>
            <button className={styles.form__button} type="button">
              Completar orden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
