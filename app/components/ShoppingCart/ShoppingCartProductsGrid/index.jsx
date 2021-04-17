import PropTypes from 'prop-types';
import useProductCard from '../../../hooks/useProductCard';
import InformationMessage from '../../shared/InformationMessage';
import ShoppingCartProductCard from '../ShoppingCartProductCard';
import styles from './styles.module.css';

const ShoppingCartProductsGrid = ({ shoppingCartList }) => {
  const { plusOne, minusOne } = useProductCard();
  return (
    <div className={styles.shoppingCartProductsGrid}>
      {shoppingCartList.length ? (
        shoppingCartList.map((product, index) => (
          <ShoppingCartProductCard
            key={product.id}
            plusOne={plusOne}
            minusOne={minusOne}
            index={index}
            product={product}
          />
        ))
      ) : (
        <InformationMessage messageText="Aun no haz añadido ningún articulo" />
      )}
    </div>
  );
};

ShoppingCartProductsGrid.propTypes = {
  shoppingCartList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  // shoppingCardActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ShoppingCartProductsGrid;
