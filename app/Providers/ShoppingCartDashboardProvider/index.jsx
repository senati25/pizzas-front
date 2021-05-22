import { array, object, oneOfType } from 'prop-types';
import { useState } from 'react';
import ShoppingCartDashboardContext from '../../context/shoppingCartDashboardContext';

const ShoppingCartDashboardProvider = ({ children }) => {

  const [state, setState] = useState([]);

  return (
    <ShoppingCartDashboardContext.Provider
      value={{
        shoppingCartProducts: state,
        setShoppingCartProduct: setState,
      }}
    >
      {children}
    </ShoppingCartDashboardContext.Provider>
  );
};

ShoppingCartDashboardProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default ShoppingCartDashboardProvider;
