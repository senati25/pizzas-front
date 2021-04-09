import useShoppingCart from '../../hooks/useShoppingCart';
import useShoppingCartContext from '../../hooks/useShoppingCartContext';
import ShoppingCartForm from './ShoppingCartForm';
import ShoppingCartProductsGrid from './ShoppingCartProductsGrid';
import styles from './styles.module.css';

const ShoppingCart = () => {
  const { shoppingCartList } = useShoppingCartContext();
  const { deleteProduct, totalCost, shoppingCardActions } = useShoppingCart();
  console.log(totalCost);
  return (
    <div className={styles.shopingCart__wrapper}>
      <div className={styles.shopingCart}>
        <h2 className={styles.shopingCart__title}>Carrito</h2>

        <div className={styles.shopingCart__content}>
          <div className={styles.shoppingCartProductsGrid__wrapper}>
            <ShoppingCartProductsGrid
              shoppingCartList={shoppingCartList}
              deleteProduct={deleteProduct}
              shoppingCardActions={shoppingCardActions}
            />
          </div>

          <ShoppingCartForm totalCost={totalCost} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
