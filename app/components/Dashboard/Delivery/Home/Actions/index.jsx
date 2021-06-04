import { useRouter } from 'next/router';
import { object, oneOfType } from 'prop-types';
import styles from './styles.module.css';

const Actions = ({ original }) => {
  const router = useRouter();

  return (
    <div className={styles.actions}>
      <button
        onClick={() => {
          router.push(`/dashboard/reparto/orders/${original.id}`);
        }}
        type="button"
      >
        <i className="fas fa-eye fa-lg"></i>
      </button>
    </div>
  );
};

Actions.propTypes = {
  original: oneOfType([object]).isRequired,
};

export default Actions;
