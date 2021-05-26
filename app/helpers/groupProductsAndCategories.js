const groupProductsAndCategories = (products = []) => {
  const getCategoriesFromProducts = products.reduce(
    (acumulator, { denominacion }) => ({
      ...acumulator,
      [denominacion]: [],
    }),
    {}
  );

  const productsGroupedByCategory = products.reduce(
    (acumulator, product) => ({
      ...acumulator,
      [product.denominacion]: [...acumulator[product.denominacion], product],
    }),
    getCategoriesFromProducts
  );

  return {
    productsByCategory: productsGroupedByCategory,
    categoriesDenominationList: Object.keys(productsGroupedByCategory),
  };
};

export default groupProductsAndCategories;
