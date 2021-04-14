import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import storeContext from '../../context/storeContext';

const StoreProvider = ({ children, initialState }) => {
  const [store, setStore] = useState(() => JSON.parse(initialState));
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
