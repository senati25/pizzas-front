import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo } from 'react';
import getPrice from '../../../helpers/getPrice';
import styles from './styles.module.css';

const ShoppingCartProductCard = memo(
  ({ product, plusOne, minusOne, deleteProduct }) => (
    <div className={styles.shoppingCartProductsGrid__item}>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => {
          deleteProduct(product);
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
            plusOne(product);
          }}
        >
          +
        </button>

        {/* <input type="number" name="quantity" value={product.cantidad} /> */}
        <span>{product.cantidad}</span>

        <button
          type="button"
          onClick={() => {
            minusOne(product);
          }}
        >
          -
        </button>
      </span>

      <span className={styles.product__name}>{product.nombre}</span>

      <span className={styles.product__price}>
        {(product.cantidad * getPrice(product)).toFixed(2)}
      </span>
    </div>
  )
);

ShoppingCartProductCard.propTypes = {
  minusOne: PropTypes.func.isRequired,
  plusOne: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,

  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    producto_id: PropTypes.number.isRequired,
    categoria_id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    variedad: PropTypes.string.isRequired,
    cantidad: PropTypes.number.isRequired,
    variedades: PropTypes.arrayOf(
      PropTypes.shape({
        denominacion: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
      }).isRequired
    ),
  }).isRequired,
};

export default ShoppingCartProductCard;
