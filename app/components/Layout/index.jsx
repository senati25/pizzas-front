import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import PublicLayout from './PublicLayout';
import DashboardLayout from './DashboardLayout';
import DashboardProvider from '../../Providers/DashboardProvider';
import PublicProvider from '../../Providers/PublicProvider';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isOnAdmin = () => pathname.includes('admin');

  if (isOnAdmin()) {
    return (
      <>
        <DashboardProvider>
          <DashboardLayout>{children}</DashboardLayout>;
        </DashboardProvider>
      </>
    );
  }

  return (
    <PublicProvider>
      <PublicLayout>{children}</PublicLayout>
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
