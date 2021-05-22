import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import useShoppingCart from '../../../hooks/useShoppingCart';
import SpinnerV2 from '../SpinerV2';
import useShoppingCartDashboard from '../../../hooks/useShoppingCartDashboard';
import styles from './styles.module.css';

const ProductCard = memo(({ product }) => {
  const [currentVariety, setCurrentVariety] = useState(product.variedades[0]);
  const route = useRouter();
  const { handleAddProduct, isLoading } = !route.pathname.includes('admin')
    ? useShoppingCart()
    : useShoppingCartDashboard();
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
        {}
        <div className={styles.productCard__tamanios}>
          {product.variedades.map((variedad) => (
            <button
              className={`${styles.tamanios__button} ${
                variedad.denominacion === currentVariety.denominacion &&
                styles.tamanios__selected
              }`}
              key={variedad.denominacion}
              title={variedad.denominacion}
              type="button"
              onClick={() => {
                handleChangeVariety(variedad);
              }}
            >
              {variedad.denominacion.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          type="button"
          className={styles.productCard__button}
          onClick={() => {
            handleAddProduct(product, currentVariety.denominacion);
          }}
          disabled={isLoading}
        >
          {!isLoading ? (
            <>
              Añadir
              <span> S/{parseInt(currentVariety.precio, 10).toFixed(2)}</span>
            </>
          ) : (
            <SpinnerV2 />
          )}
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
    variedades: PropTypes.arrayOf(
      PropTypes.shape({
        denominacion: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
      }).isRequired
    ),
  }).isRequired,
};

export default ProductCard;
