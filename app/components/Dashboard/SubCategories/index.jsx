import Link from 'next/link';
import useFetchSubcategories from '../../../hooks/useFetchSubcategories';
import SpinnerDashboard from '../../shared/SpinnerDashboard';
import SubcategoryTable from './SubcategoryTable';
import styles from './styles.module.css';

const SubCategories = () => {
  const {
    currentSubcategory,
    subcategories,
    isLoading,
    editItem,
    deleteItem,
  } = useFetchSubcategories();

  const { denominacion } = currentSubcategory;
  return (
    <>
      {!isLoading ? (
        <div className={styles.subCategories}>
          <h1 className={styles.subCategories__title}>
            {denominacion.toUpperCase()}
          </h1>
          <h2 className={styles.subCategories__subTitle}>SubCategorias</h2>

          <Link href="/admin/categories/subcategories/new">
            <a className={styles.subCategories__link}>Nuevo</a>
          </Link>

          <SubcategoryTable
            subcategories={subcategories}
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
