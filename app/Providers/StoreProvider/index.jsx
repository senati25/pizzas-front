import PropTypes from 'prop-types';
import cookie from 'cookie';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import storeContext from '../../context/storeContext';

const StoreProvider = ({ children, initialState }) => {
  console.log({ initialState });
  const [store, setStore] = useState(() => cookie.parse(initialState));

  useEffect(() => {
    Cookie.set('store', JSON.stringify(store));
  }, [store]);

  return (
    <storeContext.Provider value={{ store, setStore }}>
      {children}
    </storeContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
  initialState: PropTypes.string.isRequired,
};

export default StoreProvider;
