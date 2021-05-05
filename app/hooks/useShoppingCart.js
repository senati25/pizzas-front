import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ShoppingCartRepository from '../../api/ShoppingCartRepository';
import useSessionContext from './useSessionContext';
import useShoppingCartContext from './useShoppingCartContext';

const useShoppingCart = () => {
  const router = useRouter();
  const sessionContext = useSessionContext();
  const cartId = sessionContext?.session?.carrito_id;

  const {
    shoppingCartProducts,
    refreshShoppingCart,
  } = useShoppingCartContext();

  const [isLoading, setIsLoading] = useState(false);
  const [_isMounted, setIsMounted] = useState(true);

  const verifyProductAlreadyAdded = (product, currentVarietyDenomination) =>
    shoppingCartProducts?.find(
      ({ producto_id: productId, variedad }) =>
        variedad === currentVarietyDenomination && productId === product.id
    );

  const addNewProduct = async (
    product,
    carritoId,
    currentVarietyDenomination
  ) => {
    setIsLoading(true);

    const data = await ShoppingCartRepository.addProduct(
      product.id,
      carritoId,
      currentVarietyDenomination
    );

    const { error, message } = data;

    if (!error) {
      setIsLoading(false);
      refreshShoppingCart();
      console.log(message);
    } else {
      console.log(message);
    }
  };

  const handleUpdateShoppingCartProduct = async (shoppingCartProduct) => {
    setIsLoading(true);
    const {
      error,
      message,
    } = await ShoppingCartRepository.changeProductQuantity(shoppingCartProduct);

    if (!error && _isMounted) {
      refreshShoppingCart();
      setIsLoading(false);
      console.log(message);
    } else {
      setIsLoading(false);
      console.log(message);
    }
  };

  const handleAddProduct = async (product, currentVarietyDenomination) => {
    if (!sessionContext?.session?.isLoggedIn) return router.push('/login');

    const foundProduct = verifyProductAlreadyAdded(
      product,
      currentVarietyDenomination
    );

    if (foundProduct)
      return handleUpdateShoppingCartProduct({
        ...foundProduct,
        cantidad: foundProduct.cantidad + 1,
      });

    return addNewProduct(product, cartId, currentVarietyDenomination);
  };

  const handleDeleteShoppingCartProduct = async (shoppingCartProduct) => {
    setIsLoading(true);

    const data = await ShoppingCartRepository.deleteProduct(
      shoppingCartProduct.id,
      cartId
    );

    const { error, message } = data;

    if (error) {
      setIsLoading(false);
      console.warn(message);
    } else {
      refreshShoppingCart();
      setIsLoading(false);
    }
  };

  useEffect(
    () => () => {
      setIsMounted(false);
    },
    []
  );

  return {
    handleAddProduct,
    isLoading,
    handleUpdateShoppingCartProduct,
    handleDeleteShoppingCartProduct,
  };
};

export default useShoppingCart;
