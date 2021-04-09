import PropTypes from 'prop-types';
import useNewCategory from '../../../../hooks/useNewCategory';
import DashboardForm from '../../../shared/DashBoardForm';
import SpinnerDashboard from '../../../shared/SpinnerDashboard';
// import styles from './styles.module.css';

const NewCategoryForm = ({ handleShowNewCategoryForm, fetchCategories }) => {
  const { handleSubmit, handleOnChange, isLoading } = useNewCategory(
    fetchCategories,
    handleShowNewCategoryForm
  );
  return (
    <>
      {!isLoading ? (
        <DashboardForm
          handleSubmit={handleSubmit}
          title="Crear nueva categoria"
          onCancel={handleShowNewCategoryForm}
        >
          <input
            onChange={handleOnChange}
            type="text"
            name="denominacion"
            id="denominacion"
            placeholder="Denominacion"
          />
        </DashboardForm>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

NewCategoryForm.propTypes = {
  handleShowNewCategoryForm: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default NewCategoryForm;
