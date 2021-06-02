import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useUsers from '../../../../hooks/useUsers';
import ContentLayout from '../../../shared/ContentLayout';
import DashboardForm from '../../../shared/DashBoardForm';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const EditFormUser = () => {
  const {
    handleSubmitEdit,
    handleOnChange,
    isLoading,
    getDetalle,
    inputValues,
    getRoles,
    roles,
  } = useUsers();
  console.log(inputValues);
  const { back, query } = useRouter();
  useEffect(() => {
    getDetalle(query.id);
    getRoles();
  }, [query.id]);

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Editar Usuario" />
      <DashboardForm handleSubmit={handleSubmitEdit} onCancel={back}>
        <input
          onChange={handleOnChange}
          type="text"
          defaultValue={inputValues?.nombre}
          name="nombre"
          id="nombre"
          required
          placeholder="Nombre"
        />
        <input
          onChange={handleOnChange}
          type="text"
          name="apellido"
          defaultValue={inputValues?.apellido}
          required
          id="apellido"
          placeholder="Apellidos"
        />
        <input
          onChange={handleOnChange}
          defaultValue={inputValues?.correo}
          type="email"
          name="correo"
          required
          id="correo"
          placeholder="Correo"
        />
        <input
          onChange={handleOnChange}
          defaultValue={inputValues?.dni}
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
          defaultValue={inputValues?.direccion}
          name="direccion"
          id="direccion"
          placeholder="Direccion"
        />
        <select
          name="rol_id"
          id="rol_id"
          value={inputValues?.rol_id}
          onChange={handleOnChange}
        >
          <option value="">Seleccione un rol</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.denominacion}
            </option>
          ))}
        </select>
      </DashboardForm>
    </ContentLayout>
  );
};

export default EditFormUser;
