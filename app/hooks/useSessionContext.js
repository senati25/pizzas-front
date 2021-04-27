import { useContext } from 'react';
import SessionContext from '../context/SessionContext';

/**
 * @returns {{
 * session: {},
 * mutateSession: function
 * refreshSession: function }}
 */

const useSessionContext = () => useContext(SessionContext);

export default useSessionContext;
