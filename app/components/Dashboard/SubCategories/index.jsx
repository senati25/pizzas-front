import Link from 'next/link';
import useFetchSubcategories from '../../../hooks/useFetchSubcategories';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import SubcategoryTable from './SubcategoryTable';
import styles from './styles.module.css';

const SubCategories = () => {
  const {
    subcategories,
    fetchSubCategories,
    isLoading,
    editItem,
    deleteItem,
  } = useFetchSubcategories();

  return (
    <>
      {!isLoading ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>SubCategorias</h1>
          <Link href="/admin/categories/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <SubcategoryTable
            subcategories={subcategories}
            fetchSubCategories={fetchSubCategories}
            editItem={editItem}
            deleteItem={deleteItem}
          />

          <pre>{JSON.stringify(subcategories, null, 2)}</pre>
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default SubCategories;
