import { array, object, oneOfType } from 'prop-types';
import { useEffect, useState } from 'react';
import ShoppingCartRepository from '../../../api/ShoppingCartRepository';
import ShoppingCartContext from '../../context/ShoppingCartContext';
import useSessionContext from '../../hooks/useSessionContext';

const ShoppingCartProvider = ({ children }) => {
  const sessionContext = useSessionContext();
  const cartId = sessionContext?.session?.carrito_id;
  const [state, setState] = useState([]);

  const handleRefreshShoppingCart = async () => {
    const { payload } = await ShoppingCartRepository.getAllProducts(cartId);
    setState(payload);
  };

  useEffect(() => {
    if (
      !state.length &&
      sessionContext?.session &&
      sessionContext?.session?.isLoggedIn
    ) {
      handleRefreshShoppingCart();
    }

    console.log(sessionContext.session);
  }, [sessionContext.session]);

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
