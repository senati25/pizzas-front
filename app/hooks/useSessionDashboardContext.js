import { useContext } from 'react';
import sessionDashboardContext from '../context/sessionDashboardContext';

/**
 * @returns {{
 * session: {},
 * mutateSession: function
 * refreshSession: function }}
 */

const useSessionDashboardContext = () => useContext(sessionDashboardContext);

export default useSessionDashboardContext;
