import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useCategory from '../../../../hooks/useCategory';
import ContentLayout from '../../../shared/ContentLayout';
import DashboardForm from '../../../shared/DashBoardForm';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const EditCategoryForm = () => {
  const router = useRouter();
  const {
    isLoading,
    inputValues,
    handleGetDetails,
    handleOnChange,
    handleUpdateCategory,
  } = useCategory();

  useEffect(() => {
    handleGetDetails(router.query.id);
  }, [router.query]);

  if (isLoading) return <SpinnerDashboard />;

  return (
    <ContentLayout>
      <HeaderPageDashboard title="Editar Categoria" />
      <DashboardForm
        handleSubmit={handleUpdateCategory}
        onCancel={() => {
          router.back();
        }}
      >
        <input
          type="text"
          name="id"
          placeholder="id"
          defaultValue={inputValues.id}
          disabled
          onChange={handleOnChange}
        />

        <input
          type="text"
          name="denominacion"
          defaultValue={inputValues.denominacion}
          placeholder="Denominacion"
          onChange={handleOnChange}
        />
        <select
          name="estado"
          value={inputValues.estado}
          onChange={handleOnChange}
        >
          <option value="activo">activo</option>
          <option value="baja">baja</option>
        </select>
      </DashboardForm>
    </ContentLayout>
  );
};

export default EditCategoryForm;
