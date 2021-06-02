/* eslint-disable react/prop-types */
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useFilters,
  useAsyncDebounce,
} from 'react-table';
import styles from './styles.module.css';

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((val) => {
    setGlobalFilter(val || undefined);
  }, 200);

  return (
    <div className={styles.table__search}>
      <label htmlFor="search">
        Buscar:
        <input
          name="search"
          id="search"
          type="search"
          value={value || ''}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </label>
    </div>
  );
}

const DashboardTable = ({ columns, data, buttonPathname }) => {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useFilters,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    // visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = tableInstance;
  return (
    <div className={styles.table__wrapper}>
      <div className={styles.table__interactive}>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />

        {buttonPathname && (
          <Link href={`${buttonPathname}`}>
            <a className={styles.table__button}>Nuevo</a>
          </Link>
        )}
      </div>
      <table {...getTableProps()} className={styles.customTable}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}

          {/* <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr> */}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
          {/* {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })} */}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button
          className={styles.pagination__button}
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </button>{' '}
        <button
          className={styles.pagination__button}
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>{' '}
        <button
          className={styles.pagination__button}
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>{' '}
        <button
          className={styles.pagination__button}
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            className={styles.pagination__input}
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const p = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(p);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          className={styles.pagination__select}
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pz) => (
            <option key={pz} value={pz}>
              Ver {pz}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

DashboardTable.defaultProps = { buttonPathname: null };

DashboardTable.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
  data: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
  buttonPathname: PropTypes.string,
};

export default DashboardTable;
