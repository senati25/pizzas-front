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
        <div className={styles.subCategories}>
          <h1 className={styles.subCategories__title}>SubCategorias</h1>
          <Link href="/admin/categories/subcategories/new">
            <a className={styles.subCategories__link}>Nuevo</a>
          </Link>
          <SubcategoryTable
            subcategories={subcategories}
            fetchSubCategories={fetchSubCategories}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default SubCategories;
