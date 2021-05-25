import { useContext } from 'react';
import DashboardContext from '../context/DashboardContext';
/**
 * @returns {{
 * administrador: [],
 * refreshData: function
 * }}
 */
const useDashboardContext = () => useContext(DashboardContext);

export default useDashboardContext;
