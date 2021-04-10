import { useEffect, useState } from 'react';

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'http://127.0.0.1:8000/api/publico/productos'
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      })
      .catch(console.error);
  }, []);

  return { products, isLoading };
};

export default useProducts;
