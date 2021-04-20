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
  products: ProductRepository.getAll,
  categories: CategoryRepository.getAll,
};

const DashboardProvider = ({ children }) => {
  const [state, setState] = useState({});

  const handleRefresh = async (actionType) => {
    if (actionType) {
      console.log(`refrescando ${actionType}`);
      const data = await get[actionType]();
      setState({ ...state, [actionType]: data });
    } else {
      const values = Object.values(action);
      const promises = await values.map((value) => get[value]());
      let data = await Promise.all(promises);
      data = values.map((key, i) => [[key], data[i]]);
      data = Object.fromEntries(data);

      setState(data);
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
