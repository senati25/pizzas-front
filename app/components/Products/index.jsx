import { useState } from 'react';
import ProductsGrid from './ProductsGrid';
import Search from './Search';
import MyShoppingList from './MyShoppingList';
import usePublicContext from '../../hooks/usePublicContext';
import useFilterProducts from '../../hooks/useFilterProducts';
import NavProductsCategories from './NavProductsCategories';
import styles from './styles.module.css';

const Products = () => {
  const {
    products,
    productsByCategory = {},
    categoriesDenominationList = [],
  } = usePublicContext();

  const { filterProducts, handleSearchProducts } = useFilterProducts(products);

  const [currentCategory, setCurrentCategory] = useState('');

  return (
    <div className={styles.productsWrapper}>
      <div className={styles.products}>
        <NavProductsCategories
          categories={categoriesDenominationList}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />

        <div className={styles.products__content}>
          <div className={styles.MyShoppingList__wrapper}>
            <div className={styles.MyShoppingList}>
              <MyShoppingList />
            </div>
          </div>
          <div className={styles.search__wrapper}>
            <Search onSearch={handleSearchProducts} />
          </div>
          <div className={styles.productsGrid__wrapper}>
            <ProductsGrid
              products={
                filterProducts.length > 0
                  ? filterProducts
                  : productsByCategory[currentCategory]
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
