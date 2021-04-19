import { useContext } from 'react';
import dashboardContext from '../context/dashboardContext';
/**
 * @returns {{
 * categories: [],
 * products: [],
 * refreshCategories: function
 * refreshProducts: function }}
 */
const useDashboardContext = () => useContext(dashboardContext);

export default useDashboardContext;
