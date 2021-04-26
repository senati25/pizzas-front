import { useContext } from 'react';
import DashboardContext from '../context/DashboardContext';
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
const useDashboardContext = () => useContext(DashboardContext);

export default useDashboardContext;
