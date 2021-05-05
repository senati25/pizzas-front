import { oneOfType, array } from 'prop-types';
import useShoppingCart from '../../../hooks/useShoppingCart';
import InformationMessage from '../../shared/InformationMessage';
import ShoppingCartProductCard from '../ShoppingCartProductCard';
import styles from './styles.module.css';

const ShoppingCartProductsGrid = ({ shoppingCartProducts }) => {
  const {
    handleUpdateShoppingCartProduct,
    handleDeleteShoppingCartProduct,
  } = useShoppingCart();

  if (!shoppingCartProducts.length)
    return (
      <InformationMessage messageText="Aun no haz añadido ningún articulo" />
    );

  return (
    <div className={styles.shoppingCartProductsGrid}>
      <span className={styles.grid__header}>Item</span>
      <span className={styles.grid__header}>Cantidad</span>
      <span className={styles.grid__header}>Precio</span>
      <span className={styles.grid__header}>Subtotal</span>

      {shoppingCartProducts.map((product) => (
        <ShoppingCartProductCard
          key={product.id}
          handleUpdateShoppingCartProduct={handleUpdateShoppingCartProduct}
          product={product}
          handleDeleteShoppingCartProduct={handleDeleteShoppingCartProduct}
        />
      ))}
    </div>
  );
};

// const elementOrArrayOfElementPropType = PropTypes.oneOfType([
//   PropTypes.arrayOf(PropTypes.element),
//   PropTypes.element,
// ]);

ShoppingCartProductsGrid.propTypes = {
  shoppingCartProducts: oneOfType([array]).isRequired,
};

export default ShoppingCartProductsGrid;
