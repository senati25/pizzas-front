import { useEffect, useState } from 'react';
import ProductRepository from '../../api/ProductRepository';

const useProductsPublic = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const data = await ProductRepository.getAll();

    if (data) {
      setProducts([...data]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, isLoading };
};

export default useProductsPublic;
