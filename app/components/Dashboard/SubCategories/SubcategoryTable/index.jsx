/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import DashboardTable from '../../../shared/DashboardTable';
import styles from './styles.module.css';

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
    denominacion: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

const SubcategoryTable = ({ subcategories, editItem, deleteItem }) => (
  <DashboardTable
    columns={useMemo(() => {
      let headers = [];
      if (subcategories.length) {
        headers = [
          ...Object.keys(subcategories[0]).map((key) => ({
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
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ),
        },
      ];
    }, [subcategories])}
    data={useMemo(
      () => [
        ...subcategories.map((c) => ({
          id: c.id,
          denominacion: c.denominacion,
          estado: c.estado,
        })),
      ],
      [subcategories]
    )}
  />
);

SubcategoryTable.propTypes = {
  subcategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      denominacion: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default SubcategoryTable;
