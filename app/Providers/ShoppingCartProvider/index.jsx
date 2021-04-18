import { array, object, oneOfType } from 'prop-types';
import { useState } from 'react';
import ShoppingCartRepository from '../../../api/ShoppingCartRepository';
import shoppingCartContext from '../../context/shoppingCart';

const ShoppingCartProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const handleRefreshShoppingCart = async () => {
    const data = await ShoppingCartRepository.getAllProducts(1);

    setState(data);
  };

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
