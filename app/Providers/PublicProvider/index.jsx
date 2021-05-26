import { array, object, oneOfType } from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import ProductRepository from '../../../api/ProductRepository';
import PublicContext from '../../context/PublicContext';
import groupProductsAndCategories from '../../helpers/groupProductsAndCategories';

const action = {
  REFRESH_PRODUCTS: 'products',
};

const get = {
  products: ProductRepository.getAll,
};

const PublicProvider = ({ children }) => {
  const [state, setState] = useState({});

  const handleRefresh = async (actionType) => {
    if (actionType) {
      const data = await get[actionType]();
      setState({ ...state, [actionType]: data.payload });
    } else {
      const values = Object.values(action);
      const promises = await values.map((value) => get[value]());
      let data = await Promise.all(promises);
      data = values.map((key, i) => [[key], data[i].payload]);
      data = Object.fromEntries(data);

      setState(data);
    }
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <PublicContext.Provider
      value={{
        ...groupProductsAndCategories(state.products),
        products: state.products,
        refreshProducts: useCallback(
          () => handleRefresh(action.REFRESH_PRODUCTS),
          []
        ),
      }}
    >
      {children}
    </PublicContext.Provider>
  );
};

PublicProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};
export default PublicProvider;
