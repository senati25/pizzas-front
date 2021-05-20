import { useContext } from 'react';
import OrdersContext from '../context/OrdersContext';

/**
 * @returns {{
 * orders: [],
 * refreshOrders: function,
 */
const useOrdersContext = () => useContext(OrdersContext);

export default useOrdersContext;
