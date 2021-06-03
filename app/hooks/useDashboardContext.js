import { useContext } from 'react';
import DashboardContext from '../context/DashboardContext';
/**
 * @returns {{
 * administrador: [],
 * ventas: [],
 * cocina: [],
 * refreshData: function
 * isLoading: boolean
 * }}
 */
const useDashboardContext = () => useContext(DashboardContext);

export default useDashboardContext;
