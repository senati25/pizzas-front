/* eslint-disable react/prop-types */
import Link from 'next/link';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import useActionsTable from '../../../../hooks/useActionsTable';
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

    <Link href={`/admin/categories/subcategories/${original.id}`}>
      <a>Subcategorias</a>
    </Link>
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

const CategoryTable = ({ categories, fetchCategories }) => {
  const { editItem, deleteItem } = useActionsTable(fetchCategories);

  return (
    <DashboardTable
      columns={useMemo(() => {
        let headers = [];
        if (categories.length) {
          headers = [
            ...Object.keys(categories[0]).map((key) => ({
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
      }, [categories])}
      data={useMemo(
        () => [
          ...categories.map((c) => ({
            id: c.id,
            denominacion: c.denominacion,
            estado: c.estado,
          })),
        ],
        [categories]
      )}
    />
  );
};

CategoryTable.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      denominacion: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
    })
  ).isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default CategoryTable;
