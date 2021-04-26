import { useContext } from 'react';
import dashboardContext from '../context/dashboardContext';
/**
 * @returns {{
 * categories: [],
 * products: [],
 * clients: [],
 * users: [],
 * refreshCategories: function
 * refreshProducts: function
 * refreshUsers: function
 * refreshClients: function }}
 */
const useDashboardContext = () => useContext(dashboardContext);

export default useDashboardContext;
