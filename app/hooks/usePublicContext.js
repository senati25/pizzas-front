import { useContext } from 'react';
import PublicContext from '../context/PublicContext';
/**
 * @returns {{ * products: [] }}
 */
const usePublicContext = () => useContext(PublicContext);

export default usePublicContext;
