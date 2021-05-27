import PropTypes from 'prop-types';
import { useState } from 'react';
import useDashboardContext from '../../../../../hooks/useDashboardContext';
import useFilterProducts from '../../../../../hooks/useFilterProducts';
import SpinnerDashboard from '../../../../shared/SpinnerDashboard';
import NavProductsCategories from '../../NavProductsCategories';
import ProductsGrid from '../ProductsGrid';
import Search from '../Search';
import styles from './styles.module.css';

const SelectProducts = ({ className, title }) => {
  const { ventas } = useDashboardContext();

  const { filterProducts, handleSearchProducts } = useFilterProducts(
    ventas?.products
  );

  const [currentCategory, setCurrentCategory] = useState('');

  if (!ventas?.products)
    return (
      <div className={styles.spinnerWrapper}>
        <SpinnerDashboard />
      </div>
    );

  return (
    <div className={className}>
      {title}

      {ventas?.categoriesDenominationList?.length > 0 && (
        <NavProductsCategories
          categories={ventas.categoriesDenominationList}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      )}

      <Search onSearch={handleSearchProducts} />

      <ProductsGrid
        products={
          filterProducts.length > 0
            ? filterProducts
            : ventas?.productsByCategory[currentCategory]
        }
      />
    </div>
  );
};
SelectProducts.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
};
export default SelectProducts;
