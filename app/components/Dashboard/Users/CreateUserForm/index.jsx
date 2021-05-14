import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useUsers from '../../../../hooks/useUsers';
import DashboardForm from '../../../shared/DashBoardForm';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const CreateUserForm = () => {
  const {
    handleSubmitCreate,
    handleOnChange,
    smsResponse,
    getRoles,
    roles,
    isLoading,
  } = useUsers();
  useEffect(() => {
    getRoles();
  }, []);
  const { back } = useRouter();
  return (
    <>
      {!isLoading ? (
        <DashboardForm
          handleSubmit={handleSubmitCreate}
          title="Crear Nuevo Usuario"
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
          <select name="rol_id" id="" onChange={handleOnChange}>
            <option value="">Seleccione un rol</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.denominacion}
              </option>
            ))}
          </select>
          <p>{smsResponse}</p>
        </DashboardForm>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};
export default CreateUserForm;
