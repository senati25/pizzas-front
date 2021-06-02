import { useRouter } from 'next/router';
import useCategory from '../../../../hooks/useCategory';
import ContentLayout from '../../../shared/ContentLayout';
import DashboardForm from '../../../shared/DashBoardForm';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';

const NewCategoryForm = () => {
  const router = useRouter();
  const { isLoading, handleOnChange, handleCreateCategory } = useCategory();

  if (isLoading) return <SpinnerDashboard />;
  return (
    <ContentLayout>
      <HeaderPageDashboard title="Crear nueva categoria" />

      <DashboardForm
        handleSubmit={handleCreateCategory}
        onCancel={() => {
          router.back();
        }}
      >
        <input
          onChange={handleOnChange}
          type="text"
          name="denominacion"
          id="denominacion"
          placeholder="Denominacion"
        />
      </DashboardForm>
    </ContentLayout>
  );
};

export default NewCategoryForm;
