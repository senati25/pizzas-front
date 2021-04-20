import { useState } from 'react';
import ProductsGrid from './ProductsGrid';
import Search from './Search';
import styles from './styles.module.css';
import MyShoppingList from './MyShoppingList';
<<<<<<< HEAD

import useProducts from '../../hooks/useProducts';
=======
import useProductsPublic from '../../hooks/useProductsPublic';

>>>>>>> 4c26bf75b71649cc5e59a79247ef3ce2299878c5
const Products = () => {
  const { products, isLoading } = useProductsPublic();

  const [filterProducts, setFilterProducts] = useState([]);
  const handleSearchProducts = (query) => {
    const result = products.filter(
      (product) =>
        product.nombre.toLowerCase().includes(query.toLowerCase()) ||
        product.descripcion.toLowerCase().includes(query.toLowerCase())
    );
    setFilterProducts(result);
  };

  return (
    <div className={styles.productsWrapper}>
      <div className={styles.products}>
        <h2 className={styles.products__title}>Productos</h2>

        <div className={styles.products__content}>
          <div className={styles.MyShoppingList__wrapper}>
            <div className={styles.MyShoppingList}>
              {/* <button
                className={styles.MyShoppingList__button}
                type="button"
                onClick={() => {
                  router.push(ROUTES.public.shoppingCart);
                }}
              >
                Ir al carrito
              </button> */}
              <MyShoppingList />
            </div>
          </div>
          <div className={styles.search__wrapper}>
            <Search onSearch={handleSearchProducts} />
          </div>
          <div className={styles.productsGrid__wrapper}>
            <ProductsGrid
              isLoading={isLoading}
              products={filterProducts.length ? filterProducts : products}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
