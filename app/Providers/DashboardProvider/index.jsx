import { array, object, oneOfType } from 'prop-types';
import { useEffect, useState } from 'react';
import CategoryRepository from '../../../api/CategoryRepository';
import ClientRepository from '../../../api/ClientRepository';
import ProductRepository from '../../../api/ProductRepository';
import ClaimRepostory from '../../../api/ClaimRepostory';
import dashboardContext from '../../context/dashboardContext';

const action = {
  REFRESH_PRODUCTS: 'products',
  REFRESH_CATEGORIES: 'categories',
  REFRESH_CLIENTS: 'clients',
  REFRESH_CLAIM: 'claims',
};

const get = {
  products: ProductRepository.getAll,
  categories: CategoryRepository.getAll,
  clients: ClientRepository.getAll,
  claims: ClaimRepostory.getAll,
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
        clients: state.clients,
        claims: state.claims,
        refreshCategories: () => handleRefresh(action.REFRESH_CATEGORIES),
        refreshProducts: () => handleRefresh(action.REFRESH_PRODUCTS),
        refreshClients: () => handleRefresh(action.REFRESH_CLIENTS),
        refreshClaims: () => handleRefresh(action.REFRESH_CLAIM),
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
