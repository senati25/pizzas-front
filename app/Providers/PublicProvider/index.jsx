import { array, object, oneOfType } from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import ProductRepository from '../../../api/ProductRepository';
import PublicContext from '../../context/PublicContext';

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

  const groupProductsAndCategories = (products = []) => {
    let productsGroups = products.reduce(
      (acumulator, { denominacion }) =>
        acumulator &&
        !acumulator[denominacion]?.length && {
          ...acumulator,
          [denominacion]: [],
        },
      {}
    );

    productsGroups = products.reduce(
      (acumulator, product) => ({
        ...acumulator,
        [product.denominacion]: [...acumulator[product.denominacion], product],
      }),
      productsGroups
    );

    return {
      productsByCategory: productsGroups,
      categories: Object.keys(productsGroups),
    };
  };

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
