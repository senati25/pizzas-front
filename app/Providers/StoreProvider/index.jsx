import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import storeContext from '../../context/storeContext';

const StoreProvider = ({ children, storageKey }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [store, setStore] = useState({});

  // const [posts, dispatchPost] = useReducer(reducer, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(storageKey, JSON.stringify(store));
    }
  }, [store]);

  useEffect(() => {
    setStore({
      ...(JSON.parse(localStorage.getItem(storageKey)) || []),
    });

    setIsInitialized(true);
  }, []);

  return (
    <storeContext.Provider value={{ store, setStore }}>
      {children}
    </storeContext.Provider>
  );
};

StoreProvider.defaultProps = {
  storageKey: 'store',
};

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
  storageKey: PropTypes.string,
};

export default StoreProvider;
