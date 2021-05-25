import { array, object, oneOfType } from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
// import CategoryRepository from '../../../api/CategoryRepository';
// import ClientRepository from '../../../api/ClientRepository';
// import ProductRepository from '../../../api/ProductRepository';
// import ClaimRepostory from '../../../api/ClaimRepostory';
import DashboardContext from '../../context/DashboardContext';
import UserRepository from '../../../api/UserRepository';
import useSessionDashboardContext from '../../hooks/useSessionDashboardContext';

// const action = {
//   REFRESH_PRODUCTS: 'products',
//   REFRESH_CATEGORIES: 'categories',
//   REFRESH_CLIENTS: 'clients',
//   REFRESH_USERS: 'users',
//   REFRESH_CLAIMS: 'claims',
// };

// const get = {
//   products: ProductRepository.getAll,
//   categories: CategoryRepository.getAll,
//   clients: ClientRepository.getAll,
//   users: UserRepository.getAll,
//   claims: ClaimRepostory.getAll,
// };

const DashboardProvider = ({ children }) => {
  const { session } = useSessionDashboardContext();
  const [state, setState] = useState({});

  const handleRefresh = async () => {
    const data = await UserRepository.sectionData(session?.rol);
    console.log(data);
    if (!data.error) setState(data.payload);
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        administrador: state.administrador,
        refreshData: useCallback(() => handleRefresh(), []),
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

DashboardProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
};

export default DashboardProvider;
