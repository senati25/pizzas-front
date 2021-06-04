import { useContext } from 'react';
import DashboardContext from '../context/DashboardContext';
/**
 * @returns {{
 * administrador: [],
 * ventas: [],
 * cocina: [],
 * reparto: [],
 * refreshData: function
 * isLoading: boolean
 * }}
 */
const useDashboardContext = () => useContext(DashboardContext);

export default useDashboardContext;
