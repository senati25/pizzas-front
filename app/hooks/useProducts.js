import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/productos')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return { products };
};

export default useProducts;
