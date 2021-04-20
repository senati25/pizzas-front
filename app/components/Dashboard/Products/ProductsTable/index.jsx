/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import DashboardTable from '../../../shared/DashboardTable';
import styles from '../style.module.css';
import useProducts from '../../../../hooks/useProducts';

const Actions = ({ original, handleDeleteProduct }) => {
  const router = useRouter();

  return (
    <div className={styles.actions}>
      <button
        onClick={() => {
          router.push({
            pathname: `/admin/products/${original.id}`,
            query: original,
          });
        }}
        type="button"
      >
        <i className="fas fa-edit fa-lg"></i>
      </button>
      <button
        onClick={() => {
          handleDeleteProduct(original.id);
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
    // descripcion: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteProduct: PropTypes.func.isRequired,
};

const ProductsTable = ({ products }) => {
  const { handleDeleteProduct } = useProducts();

  return (
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
                handleDeleteProduct={handleDeleteProduct}
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
};

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductsTable;
