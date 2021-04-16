import { useRouter } from 'next/router';
import useClients from '../../../../hooks/useClientes';
import DashboardForm from '../../../shared/DashBoardForm';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

// import styles from './styles.module.css';

const CreateClientFrom = () => {
  const {
    handleSubmitCreate,
    handleOnChange,
    smsResponse,
    isLoading,
  } = useClients();
  const { back } = useRouter();
  return (
    <>
      {!isLoading ? (
        <DashboardForm
          handleSubmit={handleSubmitCreate}
          title="Crear Nuevo Cliente"
          onCancel={back}
        >
          <input
            onChange={handleOnChange}
            type="text"
            name="nombre"
            id="nombre"
            required
            placeholder="Nombre"
          />
          <input
            onChange={handleOnChange}
            type="text"
            name="apellido"
            required
            id="apellido"
            placeholder="Apellidos"
          />
          <input
            onChange={handleOnChange}
            type="email"
            name="correo"
            required
            id="correo"
            placeholder="Correo"
          />
          <input
            onChange={handleOnChange}
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
            name="direccion"
            id="direccion"
            placeholder="Direccion"
          />
          <input
            onChange={handleOnChange}
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
          />
          <p>{smsResponse}</p>
        </DashboardForm>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};
export default CreateClientFrom;
