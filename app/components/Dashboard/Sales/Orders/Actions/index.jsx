import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Actions = ({ original }) => {
  const router = useRouter();

  return (
    <div className={styles.actions}>
      <button
        onClick={() => {
          router.push(`/dashboard/ventas/orders/${original.id}`);
        }}
        type="button"
      >
        <i className="fas fa-eye fa-lg"></i>
      </button>
    </div>
  );
};

Actions.propTypes = {
  original: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Actions;
