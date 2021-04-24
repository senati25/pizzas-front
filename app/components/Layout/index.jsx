import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import PublicLayout from './PublicLayout';
import PublicProvider from '../../Providers/PublicProvider';
import SessionDashboardProvider from '../../Providers/SessionDashboardProvider';
import ShoppingCartProvider from '../../Providers/ShoppingCartProvider';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isOnAdmin = () => pathname.includes('admin');

  if (isOnAdmin()) {
    return <SessionDashboardProvider>{children}</SessionDashboardProvider>;
  }

  return (
    <PublicProvider>
      <ShoppingCartProvider>
        <PublicLayout>{children}</PublicLayout>
      </ShoppingCartProvider>
    </PublicProvider>
  );
};

const elementOrArrayOfElementPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
]);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(elementOrArrayOfElementPropType),
    elementOrArrayOfElementPropType,
  ]).isRequired,
};

export default Layout;
