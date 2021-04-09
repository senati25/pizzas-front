// import { useRouter } from 'next/router';
// import ROUTES from '../../../helpers/constants';
import { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import useCategories from '../../../hooks/useCategories';
import NewCategoryForm from './NewCategoryForm';

const Categories = () => {
  // const { push } = useRouter();
  const { categories } = useCategories();
  const [showNewCategoryForm, setShowNewCategoryForm] = useState(false);

  const handleShowNewCategoryForm = () => {
    setShowNewCategoryForm(!showNewCategoryForm);
  };

  const data = useMemo(
    () => [
      ...categories.map((c) => ({
        col1: c.id,
        col2: c.denominacion,
        col3: c.estado,
      })),
    ],
    []
  );
  const columns = useMemo(
    () => [
      ...Object.keys(categories[0]).map((key, index) => ({
        Header: key,
        accessor: `col${index + 1}`,
      })),
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
    <div>
      {!showNewCategoryForm ? (
        <>
          <button type="button" onClick={handleShowNewCategoryForm}>
            Nuevo
          </button>
          <h1>Categorias</h1>
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
      ) : (
        <NewCategoryForm
          handleShowNewCategoryForm={handleShowNewCategoryForm}
        />
      )}
    </div>
  );
};

export default Categories;
