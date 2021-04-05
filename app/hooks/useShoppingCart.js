import useShoppingCartContext from './useShoppingCartContext';

const useShoppingCart = () => {
  const { shoppingCartList, setShoppingCartList } = useShoppingCartContext();
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

  const plusOne = (index) => {
    shoppingCartList[index].quantity += 1;
    setShoppingCartList([...shoppingCartList]);
  };

  const minusOne = (index) => {
    if (shoppingCartList[index].quantity !== 0) {
      shoppingCartList[index].quantity -= 1;
      setShoppingCartList([...shoppingCartList]);
    }
  };

  const handleOnChange = (event, index) => {
    shoppingCartList[index].quantity = parseInt(event.target.value, 10);
    setShoppingCartList([...shoppingCartList]);
  };

  return {
    addProduct,
    deleteProduct,
    totalCost: calculateTotal(),
    shoppingCardActions: {
      plusOne,
      minusOne,
      handleOnChange,
    },
  };
};

export default useShoppingCart;
