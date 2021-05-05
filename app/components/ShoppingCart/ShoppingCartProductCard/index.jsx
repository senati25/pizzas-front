import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo } from 'react';
import getPrice from '../../../helpers/getPrice';
import styles from './styles.module.css';

const ShoppingCartProductCard = memo(
  ({
    product,
    handleUpdateShoppingCartProduct,
    handleDeleteShoppingCartProduct,
  }) => (
    <>
      <span className={styles.product__details}>
        <div className={styles.product__img}>
          <Image
            src={product.img}
            width={200}
            height={200}
            layout="responsive"
          />
        </div>

        <span>
          <h3 className={styles.product__name}>{product.nombre}</h3>
          <button
            className={styles.deleteButton}
            type="button"
            onClick={() => {
              handleDeleteShoppingCartProduct(product);
            }}
          >
            Eliminar
          </button>
        </span>
      </span>

      <span className={styles.product__quantity}>
        <button
          type="button"
          onClick={() => {
            handleUpdateShoppingCartProduct({
              ...product,
              cantidad: product.cantidad + 1,
            });
          }}
        >
          +
        </button>

        {/* <input type="number" name="cantidad" value={product.cantidad} /> */}
        <span>{product.cantidad}</span>

        <button
          type="button"
          onClick={() => {
            handleUpdateShoppingCartProduct({
              ...product,
              cantidad: product.cantidad - 1,
            });
          }}
        >
          -
        </button>
      </span>

      <span className={styles.product__price}>
        {getPrice(product).toFixed(2)}
      </span>

      <span className={styles.product__subtotal}>
        {(product.cantidad * getPrice(product)).toFixed(2)}
      </span>
    </>
  )
);

ShoppingCartProductCard.propTypes = {
  handleUpdateShoppingCartProduct: PropTypes.func.isRequired,
  handleDeleteShoppingCartProduct: PropTypes.func.isRequired,

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
