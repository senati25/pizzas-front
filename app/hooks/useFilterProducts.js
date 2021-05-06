import { useState } from 'react';

const useFilterProducts = (products) => {
  const [filterProducts, setFilterProducts] = useState([]);
  const handleSearchProducts = (query) => {
    const result = products.filter(
      (product) =>
        product.nombre.toLowerCase().includes(query.toLowerCase()) ||
        product.descripcion.toLowerCase().includes(query.toLowerCase())
    );
    setFilterProducts(result);
  };

  return { filterProducts, handleSearchProducts };
};

export default useFilterProducts;
