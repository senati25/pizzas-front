import PropTypes from 'prop-types';
import useNewCategory from '../../../../hooks/useNewCategory';
import DashboardForm from '../../../shared/DashBoardForm';
// import styles from './styles.module.css';

const NewCategoryForm = ({ handleShowNewCategoryForm }) => {
  const { handleSubmit, handleOnChange } = useNewCategory();
  return (
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
  );
};

NewCategoryForm.propTypes = {
  handleShowNewCategoryForm: PropTypes.func.isRequired,
};

export default NewCategoryForm;
