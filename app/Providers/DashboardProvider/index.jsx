import { array, object, oneOfType } from 'prop-types';
import { useEffect, useState } from 'react';
import CategoryRepository from '../../../api/CategoryRepository';
import ProductRepository from '../../../api/ProductRepository';
import dashboardContext from '../../context/dashboardContext';

const action = {
  REFRESH_PRODUCTS: 'products',
  REFRESH_CATEGORIES: 'categories',
};

const get = {
  categories: CategoryRepository.getAll,
  products: ProductRepository.getAll,
};

const DashboardProvider = ({ children }) => {
  const [state, setState] = useState({
    products: [],
    categories: [],
  });

  const handleRefresh = async (actionType) => {
    if (actionType) {
      const data = await get[actionType]();

      setState({ ...state, [actionType]: data });
    } else {
      const values = Object.values(action);

      values.forEach(async (element) => {
        const data = await get[element]();
        setState({ ...state, [element]: data });
      });
    }
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <dashboardContext.Provider
      value={{
        categories: state.categories,
        products: state.products,
        refreshCategories: () => handleRefresh(action.REFRESH_CATEGORIES),
        refreshProducts: () => handleRefresh(action.REFRESH_PRODUCTS),
      }}
    >
      {children}
    </dashboardContext.Provider>
  );
};

DashboardProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default DashboardProvider;
