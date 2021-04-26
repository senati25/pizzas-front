import { useContext } from 'react';
import SessionDashboardContext from '../context/SessionDashboardContext';

/**
 * @returns {{
 * session: {},
 * mutateSession: function
 * refreshSession: function }}
 */

const useSessionDashboardContext = () => useContext(SessionDashboardContext);

export default useSessionDashboardContext;
