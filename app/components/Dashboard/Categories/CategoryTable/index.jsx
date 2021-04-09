import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';
import useActionsTable from '../../../../hooks/useActionsTable';

const CategoryTable = ({ categories, fetchCategories }) => {
  const { editItem, deleteItem } = useActionsTable(fetchCategories);

  const data = useMemo(
    () => [
      ...categories.map((c) => ({
        id: c.id,
        denominacion: c.denominacion,
        estado: c.estado,
      })),
    ],
    [categories]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'id',
        accessor: `id`,
      },
      {
        Header: 'denominacion',
        accessor: `denominacion`,
      },
      {
        Header: 'estado',
        accessor: `estado`,
      },
      {
        Header: 'acciones',
        accessor: `acciones`,
        // eslint-disable-next-line react/prop-types
        Cell: ({
          // eslint-disable-next-line react/prop-types
          cell: {
            // eslint-disable-next-line react/prop-types
            row: {
              // eslint-disable-next-line react/prop-types
              values: { id },
            },
          },
        }) => (
          <div>
            <button
              onClick={() => {
                editItem(id);
              }}
              type="button"
            >
              Editar
            </button>
            <button
              onClick={() => {
                deleteItem(id);
              }}
              type="button"
            >
              Eliminar
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows

            headerGroups.map((headerGroup) => (
              // Apply the header row props

              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row

                  headerGroup.headers.map((column) => (
                    // Apply the header cell props

                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header

                        column.render('Header')
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>

        {/* Apply the table body props */}

        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            // eslint-disable-next-line react/prop-types
            rows.map((row) => {
              // Prepare the row for display

              prepareRow(row);

              return (
                // Apply the row props

                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells

                    row.cells.map((cell) => (
                      // Apply the cell props

                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents

                          cell.render('Cell')
                        }
                      </td>
                    ))
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
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
