import getPrice from './getPrice';

const calculateTotal = (shoppingCartProducts) => {
  const total = shoppingCartProducts.reduce((acumulator, product) => {
    const plus = getPrice(product) * product.cantidad;
    return acumulator + plus;
  }, 0);
  return total.toFixed(2);
};

export default calculateTotal;
