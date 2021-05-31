/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import useDashboardContext from '../../../../hooks/useDashboardContext';
import ContentLayout from '../../../shared/ContentLayout';
import DashboardTable from '../../../shared/DashboardTable';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import Actions from './Actions';
import styles from './styles.module.css';

const Orders = () => {
  const {
    ventas: { orders = [] },
  } = useDashboardContext();
  return (
    <ContentLayout>
      <HeaderPageDashboard title="Ordenes"></HeaderPageDashboard>

      <div className={styles.table__wrapper}>
        <DashboardTable
          columns={useMemo(() => {
            let headers = [];
            if (orders?.length) {
              const order = { ...orders[0] };
              delete order.cliente_id;
              delete order.estado_pedido_id;
              delete order.mensaje;
              headers = [
                ...Object.keys(order).map((key) => ({
                  Header: key.toUpperCase(),
                  accessor: key,
                })),
              ];
            }
            return [
              ...headers,
              {
                Header: 'ACCIONES',
                accessor: `acciones`,
                Cell: ({
                  cell: {
                    row: { original },
                  },
                }) => (
                  <Actions
                    original={original}
                    handleDeleteCategory={() => {}}
                  />
                ),
              },
            ];
          }, [orders])}
          data={useMemo(
            () => [
              ...orders?.map((order) => ({
                ...order,
              })),
            ],
            [orders]
          )}
        />
      </div>
    </ContentLayout>
  );
};

export default Orders;
