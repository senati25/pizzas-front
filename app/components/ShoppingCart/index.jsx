import calculateTotal from '../../helpers/calculateTotal';
import useProductCard from '../../hooks/useShoppingCartHandlers';
import useShoppingCartContext from '../../hooks/useShoppingCartContext';
import InformationMessage from '../shared/InformationMessage';
import ShoppingCartForm from './ShoppingCartForm';
import ShoppingCartProductCard from './ShoppingCartProductCard';
import ShoppingCartProductsGrid from './ShoppingCartProductsGrid';
import styles from './styles.module.css';

const ShoppingCart = () => {
  const { shoppingCartProducts } = useShoppingCartContext();

  const {
    handlePlusOne,
    handleMinusOne,
    handleDeleteProduct,
  } = useProductCard();

  return (
    <div className={styles.shopingCart__wrapper}>
      <div className={styles.shopingCart}>
        <h2 className={styles.shopingCart__title}>Carrito</h2>

        <div className={styles.shopingCart__content}>
          <div className={styles.shoppingCartProductsGrid__wrapper}>
            <ShoppingCartProductsGrid>
              {shoppingCartProducts.length ? (
                shoppingCartProducts.map((product) => (
                  <ShoppingCartProductCard
                    key={product.id}
                    plusOne={handlePlusOne}
                    minusOne={handleMinusOne}
                    product={product}
                    deleteProduct={handleDeleteProduct}
                  />
                ))
              ) : (
                <InformationMessage messageText="Aun no haz añadido ningún articulo" />
              )}
            </ShoppingCartProductsGrid>
          </div>

          <ShoppingCartForm totalCost={calculateTotal(shoppingCartProducts)} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
