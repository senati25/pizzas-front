import Link from 'next/link';
import useCategoryContext from '../../../hooks/useCategoryContext';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import CategoryTable from './CategoryTable';
import styles from './styles.module.css';

const Categories = () => {
  const { categories } = useCategoryContext();

  return (
    <>
      {categories.length !== 0 ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Categorias</h1>
          <Link href="/admin/categories/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <CategoryTable categories={categories} />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Categories;
