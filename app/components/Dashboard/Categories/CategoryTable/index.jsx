/* eslint-disable react/prop-types */

import { useMemo } from 'react';
import PropTypes from 'prop-types';
import DashboardTable from '../../../shared/DashboardTable';
import Actions from './Actions';
import useCategory from '../../../../hooks/useCategory';

const CategoryTable = ({ categories }) => {
  const { handleDeleteCategory } = useCategory();

  return (
    <DashboardTable
      buttonPathname="/dashboard/administrador/categories/new"
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
                handleDeleteCategory={handleDeleteCategory}
              />
            ),
          },
        ];
      }, [categories])}
      data={useMemo(
        () => [
          ...categories.map((category) => ({
            ...category,
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
};

export default CategoryTable;
