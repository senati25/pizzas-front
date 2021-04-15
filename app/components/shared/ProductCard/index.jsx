import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import styles from './styles.module.css';

const ProductCard = memo(({ product, addProduct }) => {
  const [subCategoria, setSubCategoria] = useState(0);

  const handlePriceChange = (e) => {
    setSubCategoria(e.target.value);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__img}>
        <Image src={product.img} layout="responsive" width={200} height={150} />
      </div>
      <div className={styles.productCard__content}>
        <h4 className={styles.productCard__title}>{product.nombre}</h4>
        <p className={styles.productCard__description}>{product.descripcion}</p>

        <select name="precio" onChange={handlePriceChange}>
          <option value="">Tamaño</option>
          {product.subcategoria.map((subcategoria, index) => (
            <option key={subcategoria.id} value={index}>
              {subcategoria.denominacion}
            </option>
          ))}
        </select>

        <button
          type="button"
          className={styles.productCard__button}
          onClick={() => {
            addProduct(product, subCategoria);
          }}
        >
          Añadir <span>S/</span>
        </button>
      </div>
    </div>
  );
});

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
