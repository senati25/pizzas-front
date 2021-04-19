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
    // descripcion: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

const ProductsTable = ({ deleteItem, products, editItem }) => (
  <DashboardTable
    columns={useMemo(() => {
      let headers = [];
      if (products.length) {
        headers = [
          { Header: 'ID', accessor: 'id' },
          { Header: 'NOMBRE', accessor: 'nombre' },
          // { Header: 'DESCRIPCION', accessor: 'descripcion' },
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
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ),
        },
      ];
    }, [products])}
    data={useMemo(
      () => [
        ...products.map((c) => ({
          id: c.id,
          nombre: c.nombre,
          // descripcion: c.descripcion,
          estado: c.estado,
        })),
      ],
      [products]
    )}
  />
);

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default ProductsTable;
