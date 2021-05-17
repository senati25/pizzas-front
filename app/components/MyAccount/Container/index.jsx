import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Container = ({ children }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <span>
        <ul className={styles.grid}>
          <Link href="/my-account/profile">
            <a
              className={`${styles.grid__item} ${
                router.pathname.includes('profile') && styles.active
              }`}
            >
              Mi perfil
            </a>
          </Link>
          <Link href="/my-account/orders">
            <a
              className={`${styles.grid__item} ${
                router.pathname.includes('orders') && styles.active
              }`}
            >
              Mis ordenes
            </a>
          </Link>
        </ul>
      </span>
      <span>{children}</span>
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([]).isRequired,
};
