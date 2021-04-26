import { useContext } from 'react';
import ShoppingCartContext from '../context/ShoppingCartContext';
/**
 * @returns {{
 * shoppingCartProducts: [],
 * setShoppingCartProducts: function,
 * refreshShoppingCart: function }}
 */
const useShoppingCartContext = () => useContext(ShoppingCartContext);

export default useShoppingCartContext;
