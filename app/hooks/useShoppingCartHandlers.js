import { useEffect, useState } from 'react';
import ShoppingCartRepository from '../../api/ShoppingCartRepository';
import useShoppingCartContext from './useShoppingCartContext';

const useShoppingCartHandlers = () => {
  const cartId = 1;

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
      currentVarietyDenomination,
      1
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

  const handlePlusOne = async ({ id, cantidad }, minus = false) => {
    let newQuantity = 0;
    newQuantity = cantidad + 1;
    if (minus) newQuantity = cantidad - 1;

    setIsLoading(true);
    const {
      error,
      message,
    } = await ShoppingCartRepository.changeProductQuantity(id, newQuantity);

    if (!error && _isMounted) {
      refreshShoppingCart();
      setIsLoading(false);
      console.log(message);
    } else {
      setIsLoading(false);
      console.log(message);
    }
  };

  const handleMinusOne = (product) => {
    handlePlusOne(product, true);
  };

  const handleAddProduct = async (product, currentVarietyDenomination) => {
    const carritoId = 1;
    const foundProduct = verifyProductAlreadyAdded(
      product,
      currentVarietyDenomination
    );

    if (foundProduct) {
      console.log(`encontrado`);

      handlePlusOne(foundProduct);
    } else {
      console.log(`no encontrado`);
      addNewProduct(product, carritoId, currentVarietyDenomination);
    }
  };

  const handleDeleteProduct = async (product) => {
    setIsLoading(true);
    console.log({ product });
    const data = await ShoppingCartRepository.deleteProduct(product.id, cartId);

    const { error, message } = data;
    console.log(data);

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
    handlePlusOne,
    handleMinusOne,
    handleDeleteProduct,
  };
};

export default useShoppingCartHandlers;
