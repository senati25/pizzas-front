import { useContext } from 'react';
import shoppingCartContext from '../context/shoppingCart';
/**
 * @returns {{
 * ShoppingCartProducts: [],
 * setShoppingCartProducts: function,
 * refreshShoppingCartProducts: function }}
 */
const useShoppingCartContext = () => useContext(shoppingCartContext);

export default useShoppingCartContext;
