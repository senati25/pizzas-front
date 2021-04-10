import Link from 'next/link';
import useFetchCategories from '../../../hooks/useFetchCategories';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import CategoryTable from './CategoryTable';
import styles from './styles.module.css';

const Categories = () => {
  const { categories, fetchCategories, isLoading } = useFetchCategories();

  return (
    <>
      {!isLoading ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Categorias</h1>
          <Link href="/admin/categories/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <CategoryTable
            categories={categories}
            fetchCategories={fetchCategories}
          />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Categories;
