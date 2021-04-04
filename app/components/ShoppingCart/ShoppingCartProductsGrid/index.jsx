import Image from 'next/image';
import PropTypes from 'prop-types';
import InformationMessage from '../../shared/InformationMessage';
import styles from './styles.module.css';

const ShoppingCartProductsGrid = ({
  shoppingCartList,
  deleteProduct,
  plusOne,
  minusOne,
  handleOnChange,
}) => (
  <div className={styles.ShoppingCartProductsGrid}>
    {shoppingCartList.length ? (
      shoppingCartList.map((product, index) => (
        <div key={product.id} className={styles.ShoppingCartProductsGrid__item}>
          <button
            className={styles.deleteButton}
            type="button"
            onClick={() => {
              deleteProduct(index);
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

          <span className={styles.product__quantity}>
            <button
              type="button"
              onClick={() => {
                plusOne(index);
              }}
            >
              +
            </button>

            <input
              onChange={(event) => {
                handleOnChange(event, index);
              }}
              type="number"
              name="quantity"
              value={product.quantity}
            />
            {/* <span>{product.quantity}</span> */}
            <button
              type="button"
              onClick={() => {
                minusOne(index);
              }}
            >
              -
            </button>
          </span>

          <span className={styles.product__name}>{product.name}</span>

          <span className={styles.product__price}>
            {(product.quantity * product.price).toFixed(2)}
          </span>
        </div>
      ))
    ) : (
      <InformationMessage messageText="Aun no haz añadido ningún articulo" />
    )}
  </div>
);

ShoppingCartProductsGrid.propTypes = {
  shoppingCartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteProduct: PropTypes.func.isRequired,
  plusOne: PropTypes.func.isRequired,
  minusOne: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default ShoppingCartProductsGrid;
