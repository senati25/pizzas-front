/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import styles from '../style.module.css';
import DashboardTable from '../../../shared/DashboardTable';

const Actions = ({ original, handleDeleteClaim }) => {
  const router = useRouter();
  return (
    <div className={styles.actions}>
      <button
        onClick={() => {
          router.push({
            pathname: `/admin/reclamo/${original.id}`,
            query: original,
          });
        }}
        type="button"
      >
        <i className="fas fa-eye fa-lg"></i>
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          handleDeleteClaim(original.id);
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
    mensaje: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteClaim: PropTypes.func.isRequired,
};

const ClaimsTable = ({ handleDeleteClaim, claims }) => (
  <DashboardTable
    columns={useMemo(() => {
      let headers = [];
      if (claims.length) {
        headers = [
          { Header: 'ID', accessor: 'id' },
          { Header: 'MENSAJE', accessor: 'mensaje' },
          { Header: 'TIPO', accessor: 'tipo' },
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
              handleDeleteClaim={handleDeleteClaim}
            />
          ),
        },
      ];
    }, [claims])}
    data={useMemo(
      () => [
        ...claims.map((claim) => ({
          ...claim,
        })),
      ],
      [claims]
    )}
  />
);
ClaimsTable.propTypes = {
  claims: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      mensaje: PropTypes.string.isRequired,
      tipo: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteClaim: PropTypes.func.isRequired,
};

export default ClaimsTable;
