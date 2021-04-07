import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo } from 'react';
import styles from './styles.module.css';

const ShoppingCartProductCard = memo(
  ({ product, index, deleteProduct, plusOne, minusOne, handleOnChange }) => (
    <div className={styles.shoppingCartProductsGrid__item}>
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
        <Image src={product.img} width={200} height={200} layout="responsive" />
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
          value={product.cantidad}
        />

        <button
          type="button"
          onClick={() => {
            minusOne(index);
          }}
        >
          -
        </button>
      </span>

      <span className={styles.product__name}>{product.nombre}</span>

      <span className={styles.product__price}>
        {(product.cantidad * product.precio).toFixed(2)}
      </span>
    </div>
  )
);

ShoppingCartProductCard.propTypes = {
  index: PropTypes.number.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  plusOne: PropTypes.func.isRequired,
  minusOne: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,

  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    cantidad: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShoppingCartProductCard;
