/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

import DashboardTable from '../../../shared/DashboardTable';
import styles from './styles.module.css';
import useClients from '../../../../hooks/useClients';

const Actions = ({ original, handleDeleteClient }) => {
  const router = useRouter();
  return (
    <div className={styles.actions}>
      <button
        onClick={() => {
          router.push({
            pathname: `/dashboard/administrador/clients/${original.id}`,
            query: original,
          });
        }}
        type="button"
      >
        <i className="fas fa-edit fa-lg"></i>
      </button>
      <button
        onClick={() => {
          handleDeleteClient(original.id);
        }}
        type="button"
      >
        <i className="fas fa-trash-alt fa-lg"></i>
      </button>
    </div>
  );
};

Actions.propTypes = {
  original: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired,
    dni: PropTypes.number.isRequired,
    direccion: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteClient: PropTypes.func.isRequired,
};

const ClientsTable = ({ clients }) => {
  const { handleDeleteClient } = useClients();

  return (
    <DashboardTable
      buttonPathname="/dashboard/administrador/clients/new"
      columns={useMemo(() => {
        let headers = [];
        if (clients.length) {
          headers = [
            { Header: 'ID', accessor: 'id' },
            { Header: 'NOMBRE', accessor: 'nombre' },
            { Header: 'APELLIDO', accessor: 'apellido' },
            { Header: 'CORREO', accessor: 'correo' },
            { Header: 'DNI', accessor: 'dni' },
            { Header: 'DIRECCION', accessor: 'direccion' },
            { Header: 'ESTADO', accessor: 'estado' },
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
                handleDeleteClient={handleDeleteClient}
              />
            ),
          },
        ];
      }, [clients])}
      data={useMemo(
        () => [
          ...clients.map((client) => ({
            ...client,
          })),
        ],
        [clients]
      )}
    />
  );
};

ClientsTable.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      apellido: PropTypes.string.isRequired,
      correo: PropTypes.string.isRequired,
      dni: PropTypes.number.isRequired,
      direccion: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ClientsTable;
