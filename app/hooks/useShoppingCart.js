import { useContext } from 'react';
import shoppingCartContext from '../context/shoppingCart';

const useShoppingCart = () => {
  const { shoppingCartList, setShoppingCartList } = useContext(
    shoppingCartContext
  );

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

  const deleteProduct = (id) => {
    shoppingCartList.splice(id, 1);
    setShoppingCartList([...shoppingCartList]);
  };

  return {
    shoppingCartList,
    addProduct,
    deleteProduct,
    totalCost: calculateTotal(),
  };
};

export default useShoppingCart;
