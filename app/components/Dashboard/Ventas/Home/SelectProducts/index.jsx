import { useState } from 'react';
import useDashboardContext from '../../../../../hooks/useDashboardContext';
import useFilterProducts from '../../../../../hooks/useFilterProducts';
import SpinnerDashboard from '../../../../shared/SpinnerDashboard';
import NavProductsCategories from '../../NavProductsCategories';
import ProductsGrid from '../ProductsGrid';
import Search from '../Search';

const SelectProducts = (props) => {
  const { ventas } = useDashboardContext();

  const { filterProducts, handleSearchProducts } = useFilterProducts(
    ventas?.products
  );

  const [currentCategory, setCurrentCategory] = useState('');

  if (!ventas?.products) return <SpinnerDashboard />;
  return (
    <div {...props}>
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

export default SelectProducts;
