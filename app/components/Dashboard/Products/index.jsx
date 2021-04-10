import Link from 'next/link';
import { React } from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductsTable from './ProductsTable';

import styles from './style.module.css';
import SpinnerDashboard from '../../shared/SpinnerDashboard';

const Products = () => {
  const { products, isLoading, deleteItem, editItem } = useProducts();

  return (
    <>
      {!isLoading ? (
        <div className={styles.categories}>
          <h1 className={styles.categories__title}>Productos</h1>
          <Link href="/admin/products/new">
            <a className={styles.categories__link}>Nuevo</a>
          </Link>
          <ProductsTable
            deleteItem={deleteItem}
            editItem={editItem}
            products={products}
          />
        </div>
      ) : (
        <SpinnerDashboard />
      )}
    </>
  );
};

export default Products;
