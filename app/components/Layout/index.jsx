import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import SessionDashboardProvider from '../../Providers/SessionDashboardProvider';
import SessionProvider from '../../Providers/SessionProvider';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isOnAdmin = () => pathname.includes('admin');

  if (isOnAdmin()) {
    return <SessionDashboardProvider>{children}</SessionDashboardProvider>;
  }

  return <SessionProvider>{children}</SessionProvider>;
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
