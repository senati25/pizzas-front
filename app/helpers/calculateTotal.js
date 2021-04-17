import getPrice from './getPrice';

const calculateTotal = (shoppingCartProducts) => {
  const total = shoppingCartProducts.reduce((acumulator, product) => {
    const plus = getPrice(product) * product.cantidad;
    return acumulator + plus;
  }, 0);
  if (typeof window !== 'undefined') {
    /* 
    localStorage.setItem('ejemplo', `${total}`); */
    if (localStorage.getItem('ejemplo')) {
      const algo = localStorage.getItem('ejemplo');
      console.log(algo);
    }
  }
  return total.toFixed(2);
};

export default calculateTotal;
