const getPrice = (product) => {
  const { variedad, variedades } = product;
  const { precio } = variedades.find(
    ({ denominacion }) => denominacion === variedad
  );
  return precio;
};

export default getPrice;
