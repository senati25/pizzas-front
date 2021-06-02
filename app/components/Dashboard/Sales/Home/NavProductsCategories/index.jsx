import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const NavProductsCategories = ({
  categories,
  currentCategory,
  setCurrentCategory,
}) => {
  useEffect(() => {
    if (categories.length > 0) {
      setCurrentCategory(categories[0]);
    }
  }, [categories]);

  return (
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
  );
};

NavProductsCategories.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
  currentCategory: PropTypes.string.isRequired,
  setCurrentCategory: PropTypes.func.isRequired,
};

export default NavProductsCategories;
