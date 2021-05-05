import { array, object, oneOfType } from 'prop-types';
import React, { useEffect, useState } from 'react';
import ProductRepository from '../../../api/ProductRepository';
import PublicContext from '../../context/PublicContext';

const get = {
  products: ProductRepository.getAll,
};

const PublicProvider = ({ children }) => {
  const [state, setState] = useState({});

  const handleRefresh = async () => {
    const keys = Object.keys(get);
    const promises = await keys.map((value) => get[value]());

    let data = await Promise.all(promises);
    data = keys.map((key, i) => [[key], data[i].payload]);
    data = Object.fromEntries(data);

    setState(data);
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  useEffect(() => {
    // console.log(state?.products);
  }, [state]);

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
