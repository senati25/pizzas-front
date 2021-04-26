import { array, object, oneOfType } from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import CategoryRepository from '../../../api/CategoryRepository';
import ClientRepository from '../../../api/ClientRepository';
import ProductRepository from '../../../api/ProductRepository';
import ClaimRepostory from '../../../api/ClaimRepostory';
import DashboardContext from '../../context/DashboardContext';
import UserRepository from '../../../api/UserRepository';

const action = {
  REFRESH_PRODUCTS: 'products',
  REFRESH_CATEGORIES: 'categories',
  REFRESH_CLIENTS: 'clients',
  REFRESH_USERS: 'users',
  REFRESH_CLAIMS: 'claims',
};

const get = {
  products: ProductRepository.getAll,
  categories: CategoryRepository.getAll,
  clients: ClientRepository.getAll,
  users: UserRepository.getAll,
  claims: ClaimRepostory.getAll,
};

const DashboardProvider = ({ children }) => {
  const [state, setState] = useState({});

  const handleRefresh = async (actionType) => {
    if (actionType) {
      const data = await get[actionType]();
      setState({ ...state, [actionType]: data.payload });
    } else {
      const values = Object.values(action);
      const promises = await values.map((value) => get[value]());
      let data = await Promise.all(promises);
      console.log({ data });
      data = values.map((key, i) => [[key], data[i].payload]);
      data = Object.fromEntries(data);

      setState(data);
    }
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        categories: state.categories,
        products: state.products,
        clients: state.clients,
        users: state.users,
        claims: state.claims,
        refreshCategories: useCallback(
          () => handleRefresh(action.REFRESH_CATEGORIES),
          []
        ),
        refreshProducts: useCallback(
          () => handleRefresh(action.REFRESH_PRODUCTS),
          []
        ),
        refreshClients: useCallback(
          () => handleRefresh(action.REFRESH_CLIENTS),
          []
        ),
        refreshUsers: useCallback(
          () => handleRefresh(action.REFRESH_USERS),
          []
        ),
        refreshClaims: useCallback(
          () => handleRefresh(action.REFRESH_CLAIMS),
          []
        ),
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

DashboardProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default DashboardProvider;
