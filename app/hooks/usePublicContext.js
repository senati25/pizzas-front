import { useContext } from 'react';
import PublicContext from '../context/PublicContext';
/**
 * @returns {{ * products: [] }}
 */

/**
 * @returns {{
 * products: {},
 * categories: [],
 */
const usePublicContext = () => useContext(PublicContext);

export default usePublicContext;
