import { useContext } from 'react';
import sessionDashboardContext from '../context/sessionDashboardContext';

/**
 * @returns {{
 * session: {},
 * setSession: function
 * refreshSession: function }}
 */

const useSessionDashboardContext = () => useContext(sessionDashboardContext);

export default useSessionDashboardContext;
