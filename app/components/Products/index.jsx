import { useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid';
import Search from './Search';
import MyShoppingList from './MyShoppingList';
import usePublicContext from '../../hooks/usePublicContext';
import useFilterProducts from '../../hooks/useFilterProducts';
import styles from './styles.module.css';
import useShoppingCart from '../../hooks/useShoppingCart';

const Products = () => {
  const {
    products,
    productsByCategory = {},
    categories = [],
  } = usePublicContext();
  const { filterProducts, handleSearchProducts } = useFilterProducts(products);
  const [currentCategory, setCurrentCategory] = useState('');
  useEffect(() => {
    if (categories.length) {
      setCurrentCategory(categories[0]);
    }
  }, [categories]);
  return (
    <div className={styles.productsWrapper}>
      <div className={styles.products}>
        <nav className={styles.products__nav}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.nav__item} ${
                currentCategory === category && styles.nav__item__active
              }`}
              onClick={() => {
                if (currentCategory !== category) setCurrentCategory(category);
              }}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </nav>

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
                filterProducts.length
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
