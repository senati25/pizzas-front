import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import useSessionContext from '../../../hooks/useSessionContext';
import Spinner from '../../shared/Spinner';
import styles from './styles.module.css';

const Container = ({ children, title }) => {
  const { session } = useSessionContext();
  const router = useRouter();

  if (!session?.isLoggedIn) return <Spinner />;

  return (
    <div className={styles.container}>
      <span className={styles.sidebar}>
        <ul className={styles.grid}>
          <Link href="/account/profile">
            <a
              className={`${styles.grid__item} ${
                router.pathname.includes('profile') && styles.active
              }`}
              title="Mi perfil"
            >
              <i className="far fa-user-circle"></i>
              <span>Mi perfil</span>
            </a>
          </Link>
          <Link href="/account/orders">
            <a
              className={`${styles.grid__item} ${
                router.pathname.includes('orders') && styles.active
              }`}
              title="Mis ordenes"
            >
              <i className="fas fa-store"></i>
              <span>Mis ordenes</span>
            </a>
          </Link>
        </ul>
      </span>
      <span>
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
      </span>
    </div>
  );
};

export default Container;

Container.defaultProps = {
  title: null,
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};
