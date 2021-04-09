import { useEffect, useState } from 'react';

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://inviaggio-api.vercel.app/api/index.php/api/publico/productos'
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
