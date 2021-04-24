import { useEffect } from 'react';
import { useRouter } from 'next/router';

import SpinnerDashboard from '../../../shared/SpinnerDashboard';
import useReclamo from '../../../../hooks/useReclamo';
import style from '../style.module.css';

const GridDetailClaim = () => {
  const router = useRouter();
  const { inputValues, getDetail, isLoading } = useReclamo();

  useEffect(() => {
    getDetail(router.query.id);
  }, [router.query]);

  return (
    <>
      {!isLoading && inputValues.cliente ? (
        <div className={style.container_Claims}>
          <div className={style.row}>
            <div className={style.col_12}>
              <h1>Reclamo</h1>
              <hr />
            </div>
            <div className={style.col_3}>
              <strong>N° :</strong> 00{inputValues.id}
            </div>
            <div className={style.col_3}>
              <strong>Tipo :</strong> {inputValues.tipo}
            </div>
            <div className={style.col_3}>
              <strong>Estado :</strong> {inputValues.estado}
            </div>
            <div className={style.col_12}>
              <strong>Detalle del reclamo :</strong>
            </div>
            <div className={style.col_12}>{inputValues.mensaje}</div>
            <div className={style.col_12}>
              <h1>Cliente</h1>
              <hr />
            </div>
            <div className={style.col_6}>
              <strong>Nombres : </strong> {inputValues.cliente.nombre}
            </div>
            <div className={style.col_6}>
              <strong>Apellidos : </strong> {inputValues.cliente.apellido}
            </div>
            <div className={style.col_6}>
              <strong>Correo : </strong> {inputValues.cliente.correo}
            </div>
            <div className={style.col_6}>
              <strong>Direccion : </strong> {inputValues.cliente.direccion}
            </div>
            <div className={style.col_6}>
              <strong>Dni : </strong> {inputValues.cliente.dni}
            </div>
          </div>
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default GridDetailClaim;
