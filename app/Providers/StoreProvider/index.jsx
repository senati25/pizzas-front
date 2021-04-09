import PropTypes from 'prop-types';
import { useState } from 'react';
import storeContext from '../../context/storeContext';

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({});

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
