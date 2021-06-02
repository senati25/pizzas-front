import { useRouter } from 'next/router';
import useClients from '../../../../hooks/useClients';
import ContentLayout from '../../../shared/ContentLayout';
import DashboardForm from '../../../shared/DashBoardForm';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const CreateClientFrom = () => {
  const {
    handleSubmitCreate,
    handleOnChange,
    smsResponse,
    isLoading,
  } = useClients();
  const { back } = useRouter();

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Registrar Cliente" />

      <DashboardForm handleSubmit={handleSubmitCreate} onCancel={back}>
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
    </ContentLayout>
  );
};
export default CreateClientFrom;
