import { useRouter } from 'next/router';
import Link from 'next/link';
import { memo } from 'react';
import useSessionDashboardContext from '../../../../hooks/useSessionDashboardContext';
import styles from './styles.module.css';

const DashboardNav = memo(() => {
  const {
    session: { rutas },
  } = useSessionDashboardContext();
  const { pathname } = useRouter();

  if (rutas.length === 1)
    return (
      <nav className={styles.dashboardNav}>
        {rutas[0].subrutas.map((subruta) => (
          <Link
            key={subruta.denominacion}
            href={`/dashboard/${rutas[0].raiz}/${subruta.nombre}`}
          >
            <a
              className={`${styles.dashboardNav__link} ${
                pathname.includes(`/${rutas[0].raiz}/${subruta.nombre}`) &&
                styles.dashboardNav__link__active
              } `}
            >
              {subruta.denominacion.charAt(0).toUpperCase() +
                subruta.denominacion.slice(1)}
            </a>
          </Link>
        ))}
      </nav>
    );

  return (
    <nav className={styles.dashboardNav}>
      {rutas.map((ruta) => (
        <details
          key={ruta.raiz}
          className={styles.details}
          open={pathname.includes(ruta.raiz)}
        >
          <summary className={styles.details__summary}>
            {ruta.raiz.toUpperCase()}
          </summary>
          {ruta.subrutas.map((subruta) => (
            <Link
              key={subruta.denominacion}
              href={`/dashboard/${ruta.raiz}/${subruta.nombre}`}
            >
              <a
                className={`${styles.dashboardNav__link} ${
                  pathname.includes(`/${ruta.raiz}/${subruta.nombre}`) &&
                  styles.dashboardNav__link__active
                } `}
              >
                {subruta.denominacion.charAt(0).toUpperCase() +
                  subruta.denominacion.slice(1)}
              </a>
            </Link>
          ))}
        </details>
      ))}

      {/* <Link href="/dashboard/administrador/analytics">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('analytics') && styles.dashboardNav__link__active
          } `}
        >
          Analytics
        </a>
      </Link>

      <Link href="/dashboard/administrador/clients">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('clients') && styles.dashboardNav__link__active
          } `}
        >
          Clientes
        </a>
      </Link>

      <Link href="/dashboard/administrador/products">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('products') && styles.dashboardNav__link__active
          } `}
        >
          Productos
        </a>
      </Link>

      <Link href="/dashboard/administrador/categories">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('categories') && styles.dashboardNav__link__active
          } `}
        >
          Categorias
        </a>
      </Link>

      <Link href="/dashboard/administrador/claims">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('claims') && styles.dashboardNav__link__active
          } `}
        >
          Reclamos
        </a>
      </Link>

      <Link href="/dashboard/administrador/users">
        <a
          className={`${styles.dashboardNav__link} ${
            pathname.includes('users') && styles.dashboardNav__link__active
          } `}
        >
          Usuarios
        </a>
      </Link> */}
    </nav>
  );
});

export default DashboardNav;
