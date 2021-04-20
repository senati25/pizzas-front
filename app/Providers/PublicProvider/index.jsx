import { array, object, oneOfType } from 'prop-types';
import React, { useEffect, useState } from 'react';
import ProductRepository from '../../../api/ProductRepository';
import publicContext from '../../context/publicContext';

const get = {
  products: ProductRepository.getAll,
};

const PublicProvider = ({ children }) => {
  const [state, setState] = useState({});

  const handleRefresh = async () => {
    const keys = Object.keys(get);
    const promises = await keys.map((value) => get[value]());

    let data = await Promise.all(promises);
    data = keys.map((key, i) => [[key], data[i]]);
    data = Object.fromEntries(data);

    setState(data);
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <publicContext.Provider
      value={{
        products: state.products,
      }}
    >
      {children}
    </publicContext.Provider>
  );
};

PublicProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};
export default PublicProvider;
