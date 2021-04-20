import { useContext } from 'react';
import dashboardContext from '../context/dashboardContext';
/**
 * @returns {{
 * categories: [],
 * products: [],
 * clients: [],
 * refreshCategories: function
 * refreshProducts: function
 * refreshClients: function }}
 */
const useDashboardContext = () => useContext(dashboardContext);

export default useDashboardContext;
