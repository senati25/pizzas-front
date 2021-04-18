import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import storeContext from '../../context/storeContext';

const isServer = () => typeof window === 'undefined';

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(() =>
    !isServer() ? JSON.parse(localStorage.getItem('store')) : {}
  );

  useEffect(() => {
    if (!isServer()) {
      localStorage.setItem('store', JSON.stringify(store));
    }
  }, [store]);

  return (
    <storeContext.Provider value={{ store, setStore }}>
      {children}
    </storeContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StoreProvider;
