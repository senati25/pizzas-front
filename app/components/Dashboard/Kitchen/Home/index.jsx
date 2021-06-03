/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import useDashboardContext from '../../../../hooks/useDashboardContext';
import ContentLayout from '../../../shared/ContentLayout';
import DashboardTable from '../../../shared/DashboardTable';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';
import Actions from './Actions';

const Home = () => {
  const {
    cocina: { orders = [] },
    isLoading,
  } = useDashboardContext();

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: `id`,
      },
      {
        Header: 'FECHA',
        accessor: `fecha`,
      },
      {
        Header: 'TIPO',
        accessor: `tipo`,
      },
      {
        Header: 'ESTADO',
        accessor: `estado`,
      },
      {
        Header: 'ACCIONES',
        accessor: `acciones`,
        Cell: ({
          cell: {
            row: { original },
          },
        }) => <Actions original={original} />,
      },
    ],
    [orders]
  );

  const data = useMemo(
    () => [
      ...orders?.map((order) => ({
        ...order,
      })),
    ],
    [orders]
  );

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Ordenes" />
      <DashboardTable columns={columns} data={data} />
    </ContentLayout>
  );
};

export default Home;
