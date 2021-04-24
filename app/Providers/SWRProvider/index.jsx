import { SWRConfig } from 'swr';
import { array, object, oneOfType } from 'prop-types';
import fetcher from '../../../lib/fetcher';

const SWRProvider = ({ children }) => (
  <SWRConfig
    value={{
      fetcher,
      onError: (err) => {
        console.error(err);
      },
    }}
  >
    {children}
  </SWRConfig>
);

SWRProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default SWRProvider;
