import React from 'react';
import useReclamo from '../../../hooks/useReclamo';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import style from '../style.module.css';

const ReclamoForm = () => {
  const {
    isLoading,
    smsResponse,
    handleSubmitCreate,
    handleOnChange,
  } = useReclamo();
  return !isLoading ? (
    <div className={style.ReclamoContainer}>
      <form onSubmit={handleSubmitCreate} method="post">
        <h2 className={style.TitleLogin}>Reclamos</h2>
        <div className={style.FormGroup}>
          <label htmlFor="mensaje">
            Reclamo
            <textarea
              onChange={handleOnChange}
              cols="30"
              rows="10"
              name="mensaje"
              id="mensaje"
              placeholder="Escriba el detalle de su reclamo"
              className={style.formControl}
              required
            ></textarea>
          </label>
        </div>
        <div className={style.FormGroup}>
          <label htmlFor="cliente_id">
            Cliente id
            <input
              onChange={handleOnChange}
              type="text"
              name="cliente_id"
              id="cliente_id"
              className={style.formControl}
              required
              placeholder="Escriba el id del cliente"
            />
          </label>
        </div>

        <div className={style.FormGroup}>
          <label htmlFor="dni">
            Dni
            <select
              name="tipo"
              id=""
              className={style.formControl}
              onChange={handleOnChange}
            >
              <option value="reclamo">Reclamo</option>
              <option value="queja">Queja</option>
            </select>
          </label>
        </div>
        <div className={style.ButtonContainer}>
          <input
            type="submit"
            value="HACER RECLAMO"
            className={style.ButtonRed}
          />
        </div>
        <br />
        <div className={style.smsResponse}>
          <small>
            <code>{smsResponse}</code>
          </small>
        </div>
      </form>
    </div>
  ) : (
    <SpinnerDashboard />
  );
};
export default ReclamoForm;
