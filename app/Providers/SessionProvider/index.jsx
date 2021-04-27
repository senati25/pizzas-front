import useSWR from 'swr';
import { array, object, oneOfType } from 'prop-types';
import SessionContext from '../../context/SessionContext';
import PublicProvider from '../PublicProvider';
import ShoppingCartProvider from '../ShoppingCartProvider';
import PublicLayout from '../../components/Layout/PublicLayout';

const SessionProvider = ({ children }) => {
  const { data: session, mutate: mutateSession } = useSWR('/api/user');

  const handleRefreshSession = () => {};

  return (
    <SessionContext.Provider
      value={{
        session,
        mutateSession,
        refreshSession: handleRefreshSession,
      }}
    >
      <PublicProvider>
        <ShoppingCartProvider>
          <PublicLayout>{children}</PublicLayout>
        </ShoppingCartProvider>
      </PublicProvider>
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default SessionProvider;
