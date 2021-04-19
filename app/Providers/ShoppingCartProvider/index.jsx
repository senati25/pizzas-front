import { array, object, oneOfType } from 'prop-types';
import { useEffect, useState } from 'react';
import ShoppingCartRepository from '../../../api/ShoppingCartRepository';
import shoppingCartContext from '../../context/shoppingCart';

const ShoppingCartProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const handleRefreshShoppingCart = async () => {
    const { payload } = await ShoppingCartRepository.getAllProducts(1);
    setState(payload);
  };

  useEffect(() => {
    if (!state.length) {
      handleRefreshShoppingCart();
    }
  }, []);

  return (
    <shoppingCartContext.Provider
      value={{
        shoppingCartProducts: state,
        setShoppingCartProducts: setState,
        refreshShoppingCart: handleRefreshShoppingCart,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default ShoppingCartProvider;
