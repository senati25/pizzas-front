import PropTypes from 'prop-types';
import InformationMessage from '../../shared/InformationMessage';
import ShoppingCartProductCard from '../ShoppingCartProductCard';
import styles from './styles.module.css';

const ShoppingCartProductsGrid = ({
  shoppingCartList,
  deleteProduct,
  shoppingCardActions,
}) => (
  <div className={styles.shoppingCartProductsGrid}>
    {shoppingCartList.length ? (
      shoppingCartList.map((product, index) => (
        <ShoppingCartProductCard
          key={product.id}
          deleteProduct={deleteProduct}
          index={index}
          product={product}
          {...shoppingCardActions}
        />
      ))
    ) : (
      <InformationMessage messageText="Aun no haz añadido ningún articulo" />
    )}
  </div>
);

ShoppingCartProductsGrid.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  shoppingCartList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  shoppingCardActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ShoppingCartProductsGrid;
