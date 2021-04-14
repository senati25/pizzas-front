import useShoppingCartContext from './useShoppingCartContext';

const useShoppingCart = () => {
  const { shoppingCartList, setShoppingCartList } = useShoppingCartContext();
  const verifyProductAlreadyAdded = (product) =>
    shoppingCartList.some(({ id }) => id === product.id);

  const addProduct = (newProduct, index) => {
    if (verifyProductAlreadyAdded(newProduct)) {
      const newState = shoppingCartList.map((product) => {
        if (product.id === newProduct.id) {
          const { cantidad } = product;
          return {
            ...newProduct,
            cantidad: cantidad + 1,
            precio: newProduct.subcategoria[index].precio,
          };
        }
        return product;
      });

      setShoppingCartList(newState);
    } else {
      setShoppingCartList((prevState) => [
        ...prevState,
        {
          ...newProduct,
          cantidad: 1,
          precio: newProduct.subcategoria[index].precio,
        },
      ]);
    }
  };

  const calculateTotal = () => {
    const total = shoppingCartList.reduce(
      (acumulator, { precio, cantidad }) => {
        const plus = precio * cantidad;
        return acumulator + plus;
      },
      0
    );
    return total.toFixed(2);
  };

  const deleteProduct = (id) => {
    shoppingCartList.splice(id, 1);
    setShoppingCartList([...shoppingCartList]);
  };

  const plusOne = (index) => {
    shoppingCartList[index].cantidad += 1;
    setShoppingCartList([...shoppingCartList]);
  };

  const minusOne = (index) => {
    if (shoppingCartList[index].cantidad !== 0) {
      shoppingCartList[index].cantidad -= 1;
      setShoppingCartList([...shoppingCartList]);
    }
  };

  const handleOnChange = (event, index) => {
    shoppingCartList[index].cantidad = parseInt(event.target.value, 10);
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
