import PropTypes from 'prop-types';
import { useState } from 'react';
import shoppingCartContext from '../../context/shoppingCart';

const ShopingCartProvider = ({ children }) => {
  const [shoppingCartList, setShoppingCartList] = useState([]);

  return (
    <shoppingCartContext.Provider
      value={{ shoppingCartList, setShoppingCartList }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

ShopingCartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ShopingCartProvider;
