import { useContext, useEffect } from 'react';
import shoppingCartContext from '../context/shoppingCart';

const useShoppingCart = () => {
  const { shoppingCartList, setShoppingCartList } = useContext(
    shoppingCartContext
  );

  const saveToLocalStorage = () => {
    if (window) {
      localStorage.setItem(
        'shoppingCartList',
        JSON.stringify(shoppingCartList)
      );
    }
  };

  const verifyProductAlreadyAdded = (product) =>
    shoppingCartList.some(({ id }) => id === product.id);

  const addProduct = (newProduct) => {
    if (verifyProductAlreadyAdded(newProduct)) {
      const newState = shoppingCartList.map((product) => {
        if (product.id === newProduct.id) {
          const { quantity } = product;
          return { ...newProduct, quantity: quantity + 1 };
        }
        return product;
      });

      setShoppingCartList(newState);
    } else {
      setShoppingCartList((prevState) => [
        ...prevState,
        { ...newProduct, quantity: 1 },
      ]);
    }
  };

  const calculateTotal = () => {
    const total = shoppingCartList.reduce((acumulator, { price, quantity }) => {
      const plus = price * quantity;
      return acumulator + plus;
    }, 0);
    return total.toFixed(2);
  };

  useEffect(() => {
    saveToLocalStorage();
  }, [shoppingCartList]);

  return { shoppingCartList, addProduct, totalCost: calculateTotal() };
};

export default useShoppingCart;
