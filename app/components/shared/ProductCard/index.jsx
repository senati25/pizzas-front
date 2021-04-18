import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import useShoppingCartHandlers from '../../../hooks/useShoppingCartHandlers';
import styles from './styles.module.css';

const ProductCard = memo(({ product }) => {
  const [currentVariety, setCurrentVariety] = useState(product.variedades[0]);
  const { handleAddProduct, isLoading } = useShoppingCartHandlers();

  const handleChangeVariety = (variety) => {
    setCurrentVariety({ ...variety });
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__img}>
        <Image src={product.img} layout="responsive" width={200} height={150} />
      </div>
      <div className={styles.productCard__content}>
        <h4 className={styles.productCard__title}>{product.nombre}</h4>
        <p
          className={styles.productCard__description}
          title={product.descripcion}
        >
          {product.descripcion}
        </p>

        <div className={styles.productCard__tamanios}>
          {product.variedades.map((variedad) => (
            <button
              className={styles.tamanios__button}
              key={variedad.denominacion}
              title={variedad.denominacion}
              type="button"
              onClick={() => {
                handleChangeVariety(variedad);
              }}
            >
              {variedad.denominacion}
            </button>
          ))}
        </div>

        {!isLoading ? (
          <button
            type="button"
            className={styles.productCard__button}
            onClick={() => {
              handleAddProduct(product, currentVariety.denominacion);
            }}
          >
            Añadir
            <span>S/ {parseInt(currentVariety.precio, 10).toFixed(2)}</span>
          </button>
        ) : (
          <div>cargando</div>
        )}
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
    variedades: PropTypes.arrayOf(
      PropTypes.shape({
        denominacion: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
      }).isRequired
    ),
  }).isRequired,
  // handleAddProduct: PropTypes.func.isRequired,
  // isLoading: PropTypes.bool.isRequired,
};

export default ProductCard;
