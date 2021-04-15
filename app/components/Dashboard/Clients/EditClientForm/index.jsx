import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useClients from '../../../../hooks/useClientes';
import DashboardForm from '../../../shared/DashBoardForm';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

// import styles from './styles.module.css';

const EditClientForm = () => {
  const {
    handleSubmitEdit,
    handleOnChange,
    isLoading,
    getDetalle,
    inputValues,
  } = useClients();
  const { back, query } = useRouter();
  useEffect(() => {
    getDetalle(query.id);
  }, []);
  return (
    <>
      {!isLoading ? (
        <DashboardForm
          handleSubmit={handleSubmitEdit}
          title="Editar Cliente"
          onCancel={back}
        >
          <input
            onChange={handleOnChange}
            type="text"
            value={inputValues.nombre}
            name="nombre"
            id="nombre"
            required
            placeholder="Nombre"
          />
          <input
            onChange={handleOnChange}
            type="text"
            name="apellido"
            value={inputValues.apellido}
            required
            id="apellido"
            placeholder="Apellidos"
          />
          <input
            onChange={handleOnChange}
            value={inputValues.correo}
            type="email"
            name="correo"
            required
            id="correo"
            placeholder="Correo"
          />
          <input
            onChange={handleOnChange}
            value={inputValues.dni}
            type="string"
            name="dni"
            id="dni"
            maxLength="8"
            required
            placeholder="Dni"
          />
          <input
            onChange={handleOnChange}
            type="text"
            value={inputValues.direccion}
            name="direccion"
            id="direccion"
            placeholder="Direccion"
          />
          <select name="estado" id="" defaultValue={inputValues.estado}>
            <option value="activo">Activo</option>
            <option value="baja">Baja</option>
          </select>
        </DashboardForm>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default EditClientForm;
