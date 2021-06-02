import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useClients from '../../../../hooks/useClients';
import ContentLayout from '../../../shared/ContentLayout';
import DashboardForm from '../../../shared/DashBoardForm';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const EditClientForm = () => {
  const router = useRouter();
  const {
    isLoading,
    inputValues,
    getDetalle,
    handleSubmitEdit,
    handleOnChange,
  } = useClients();

  useEffect(() => {
    getDetalle(router.query.id);
  }, [router.query]);

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Editar Cliente" />
      <DashboardForm handleSubmit={handleSubmitEdit} onCancel={router.back}>
        <input
          onChange={handleOnChange}
          type="text"
          defaultValue={inputValues.nombre}
          name="nombre"
          id="nombre"
          required
          placeholder="Nombre"
        />

        <input
          onChange={handleOnChange}
          type="text"
          name="apellido"
          defaultValue={inputValues.apellido}
          required
          id="apellido"
          placeholder="Apellidos"
        />

        <input
          onChange={handleOnChange}
          defaultValue={inputValues.correo}
          type="email"
          name="correo"
          required
          id="correo"
          placeholder="Correo"
        />
        <input
          onChange={handleOnChange}
          defaultValue={inputValues.dni}
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
          defaultValue={inputValues.direccion}
          name="direccion"
          id="direccion"
          placeholder="Direccion"
        />
        <select
          name="estado"
          onChange={handleOnChange}
          value={inputValues.estado}
        >
          <option value="activo">Activo</option>
          <option value="baja">Baja</option>
        </select>
      </DashboardForm>
    </ContentLayout>
  );
};

export default EditClientForm;
