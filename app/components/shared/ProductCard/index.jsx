import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo } from 'react';
import styles from './styles.module.css';

const ProductCard = memo(({ product, addProduct }) => (
  <div className={styles.productCard}>
    <div className={styles.productCard__img}>
      <Image src={product.img} layout="responsive" width={200} height={150} />
    </div>
    <div className={styles.productCard__content}>
      <h4 className={styles.productCard__title}>{product.nombre}</h4>
      <p className={styles.productCard__description}>{product.descripcion}</p>
      <button
        type="button"
        className={styles.productCard__button}
        onClick={() => {
          addProduct(product);
        }}
      >
        Añadir <span>S/</span>
      </button>
    </div>
  </div>
));

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ProductCard;
