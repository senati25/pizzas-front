import { useContext } from 'react';
import shoppingCartContext from '../context/shoppingCart';
/**
 * @returns {{
 * shoppingCartProducts: [],
 * setShoppingCartProducts: function,
 * refreshShoppingCart: function }}
 */
const useShoppingCartContext = () => useContext(shoppingCartContext);

export default useShoppingCartContext;
