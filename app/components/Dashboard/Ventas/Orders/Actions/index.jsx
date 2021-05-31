import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Actions = ({ original, handleDeleteCategory }) => {
  const router = useRouter();

  return (
    <div className={styles.actions}>
      <button
        onClick={() => {
          router.push({
            pathname: `/dashboard/administrador/categories/${original.id}`,
            query: original,
          });
        }}
        type="button"
      >
        <i className="fas fa-edit fa-lg"></i>
      </button>
      <button
        onClick={() => {
          handleDeleteCategory(original.id);
        }}
        type="button"
      >
        <i className="fas fa-trash-alt fa-lg"></i>
      </button>
    </div>
  );
};

Actions.propTypes = {
  original: PropTypes.shape({
    id: PropTypes.number.isRequired,
    denominacion: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteCategory: PropTypes.func.isRequired,
};

export default Actions;
