/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import DashboardTable from '../../../shared/DashboardTable';
import styles from '../style.module.css';

const Actions = ({ original, deleteItem, editItem }) => (
  <div className={styles.actions}>
    <button
      onClick={() => {
        editItem(original);
      }}
      type="button"
    >
      <i className="fas fa-edit fa-lg"></i>
    </button>
    <button
      onClick={() => {
        deleteItem(original.id);
      }}
      type="button"
    >
      <i className="fas fa-trash-alt fa-lg"></i>
    </button>
  </div>
);

Actions.propTypes = {
  original: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired,
    dni: PropTypes.number.isRequired,
    rol_denominacion: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

const UsersTable = ({ deleteItem, users, editItem }) => (
  <DashboardTable
    columns={useMemo(() => {
      let headers = [];
      if (users.length) {
        headers = [
          { Header: 'ID', accessor: 'id' },
          { Header: 'NOMBRE', accessor: 'nombre' },
          { Header: 'APELLIDO', accessor: 'apellido' },
          { Header: 'CORREO', accessor: 'correo' },
          { Header: 'DNI', accessor: 'dni' },
          { Header: 'DIRECCION', accessor: 'direccion' },
          { Header: 'ROL', accessor: 'rol_denominacion' },
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
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ),
        },
      ];
    }, [users])}
    data={useMemo(
      () => [
        ...users.map((c) => ({
          ...c,
        })),
      ],
      [users]
    )}
  />
);

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      apellido: PropTypes.string.isRequired,
      correo: PropTypes.string.isRequired,
      dni: PropTypes.number.isRequired,
      rol_denominacion: PropTypes.string.isRequired,
      direccion: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default UsersTable;
