import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://inviaggio-api.vercel.app/api/index.php/api/productos')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return { products };
};

export default useProducts;
