import React from 'react'
import useDashboardContext from '../../../hooks/useDashboardContext';
import ProductsGrid from '../../Products/ProductsGrid';
import Search from '../../Products/Search';
import useFilterProducts from '../../../hooks/useFilterProducts';

const Orders = () => {
    
  const dashboardContext = useDashboardContext();
  const { filterProducts, handleSearchProducts } = useFilterProducts(dashboardContext?.products);
    return (
        <div>
          <Search onSearch={handleSearchProducts}></Search>
          <ProductsGrid products={filterProducts.length?
            dashboardContext.products
            :filterProducts}/>
        </div>
    )
}
export default Orders;
