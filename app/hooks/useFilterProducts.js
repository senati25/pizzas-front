import { useState } from 'react';

const useFilterProducts = (products) => {
  const [filterProducts, setFilterProducts] = useState([]);
  const handleSearchProducts = (query) => {
    const result = products.filter(
      (product) =>
        product.nombre.toLowerCase().includes(query.toLowerCase().trim()) ||
        product.descripcion.toLowerCase().includes(query.toLowerCase().trim())
    );

    if (query.trim() === '') return setFilterProducts([]);

    return setFilterProducts(result);
  };

  return { filterProducts, handleSearchProducts };
};

export default useFilterProducts;
