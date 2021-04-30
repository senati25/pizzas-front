import calculateTotal from '../../helpers/calculateTotal';
import useShoppingCartContext from '../../hooks/useShoppingCartContext';
import ShoppingCartForm from './ShoppingCartForm';
import ShoppingCartProductsGrid from './ShoppingCartProductsGrid';
import styles from './styles.module.css';

const ShoppingCart = () => {
  const { shoppingCartProducts } = useShoppingCartContext();

  return (
    <div className={styles.shopingCart__wrapper}>
      <div className={styles.shopingCart}>
        <h2 className={styles.shopingCart__title}>Carrito</h2>

        <div className={styles.shopingCart__content}>
          <div className={styles.shoppingCartProductsGrid__wrapper}>
            <ShoppingCartProductsGrid
              shoppingCartProducts={shoppingCartProducts}
            />
          </div>

          <ShoppingCartForm totalCost={calculateTotal(shoppingCartProducts)} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
