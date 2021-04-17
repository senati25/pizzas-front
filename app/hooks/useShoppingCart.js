import { useEffect, useState } from 'react';
import ROUTES from '../helpers/constants';
import useStoreContext from './useStoreContext';

const useShoppingCart = () => {
  const { store, setStore } = useStoreContext();

  const [isLoading, setIsLoading] = useState(true);
  const [_isMounted, setIsMounted] = useState(true);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);

  const fetchShoppingCart = async () => {
    const response = await fetch(
      `${ROUTES.api}/publico/carritoTieneProducto/1`
    );

    const { error, payload } = await response.json();
    if (!error && _isMounted) {
      setIsLoading(false);
      setShoppingCartProducts([...payload]);
    } else if (_isMounted) {
      setIsLoading(false);
    }
  };

  // const addProduct = async (product, currentVarietyDenomination) => {
  //   setIsLoading(true);
  //   const carritoId = 1;

  //   const foundProduct = verifyProductAlreadyAdded(
  //     product,
  //     currentVarietyDenomination
  //   );

  //   if (foundProduct) {
  //     setIsLoading(false);
  //   } else {
  //   }

  //   // ------------------------------
  //   if (verifyProductAlreadyAdded(newProduct)) {
  //     const newState = shoppingCartProducts.map((product) => {
  //       if (product.id === newProduct.id) {
  //         const { cantidad } = product;
  //         return {
  //           ...newProduct,
  //           cantidad: cantidad + 1,
  //           precio: newProduct.subcategoria[index].precio,
  //         };
  //       }
  //       return product;
  //     });
  //     setShoppingCartProducts(newState);
  //   } else {
  //     setShoppingCartProducts((prevState) => [
  //       ...prevState,
  //       {
  //         ...newProduct,
  //         cantidad: 1,
  //         precio: newProduct.subcategoria[index].precio,
  //       },
  //     ]);
  //   }
  // };

  const deleteProduct = (id) => {
    shoppingCartProducts.splice(id, 1);
    setShoppingCartProducts([...shoppingCartProducts]);
  };

  const minusOne = (index) => {
    if (shoppingCartProducts[index].cantidad !== 0) {
      shoppingCartProducts[index].cantidad -= 1;
      setShoppingCartProducts([...shoppingCartProducts]);
    }
  };

  const handleOnChange = (event, index) => {
    shoppingCartProducts[index].cantidad = parseInt(event.target.value, 10);
    setShoppingCartProducts([...shoppingCartProducts]);
  };

  useEffect(() => {
    setStore((prevState) => ({ ...prevState, shoppingCartProducts }));
    setStore({ ...store, shoppingCartProducts });
  }, [shoppingCartProducts]);

  useEffect(() => {
    setStore({ ...store, fetchShoppingCart });
    fetchShoppingCart();

    return () => {
      setIsMounted(false);
    };
  }, []);

  return {
    shoppingCartProducts,
    isLoading,
    deleteProduct,
    shoppingCardActions: {
      minusOne,
      handleOnChange,
    },
  };
};

export default useShoppingCart;
