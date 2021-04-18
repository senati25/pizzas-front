import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ShoppingCartProductsGrid = ({ children }) => (
  <div className={styles.shoppingCartProductsGrid}>{children}</div>
);

const elementOrArrayOfElementPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
]);

ShoppingCartProductsGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(elementOrArrayOfElementPropType),
    elementOrArrayOfElementPropType,
  ]).isRequired,
};

export default ShoppingCartProductsGrid;
