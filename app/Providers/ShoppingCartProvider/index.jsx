import { array, object, oneOfType } from 'prop-types';
import { useEffect, useState } from 'react';
import ShoppingCartRepository from '../../../api/ShoppingCartRepository';
import ShoppingCartContext from '../../context/ShoppingCartContext';

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
    <ShoppingCartContext.Provider
      value={{
        shoppingCartProducts: state,
        setShoppingCartProducts: setState,
        refreshShoppingCart: handleRefreshShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default ShoppingCartProvider;
