import { useEffect, useState } from 'react';
import ShoppingCartRepository from '../../api/ShoppingCartRepository';
import ROUTES from '../helpers/constants';
import useShoppingCart from './useShoppingCart';

const useProductCard = () => {
  const { shoppingCartProducts, fetchShoppingCart } = useShoppingCart();
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
      fetchShoppingCart();
      console.log(message);
    } else {
      console.log(message);
    }
  };

  const plusOne = async ({ id, cantidad }, minus = false) => {
    console.log(minus);
    let newQuantity = 0;
    newQuantity = cantidad + 1;
    if (minus) newQuantity = cantidad - 1;

    setIsLoading(true);
    const response = await fetch(
      `${ROUTES.api}/publico/carritoTieneProducto/aumentarUnidad/${id}`,
      {
        method: 'POST',
        body: JSON.stringify({ cantidad: newQuantity }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const { error, message } = await response.json();

    if (!error && _isMounted) {
      await fetchShoppingCart();
      setIsLoading(false);
      console.log(message);
    } else {
      setIsLoading(false);
      console.log(message);
    }
    // shoppingCartProducts[index].cantidad += 1;
    // setShoppingCartProducts([...shoppingCartProducts]);
  };

  const minusOne = (product) => {
    plusOne(product, true);
  };

  const handleAddProduct = async (product, currentVarietyDenomination) => {
    const carritoId = 1;
    const foundProduct = verifyProductAlreadyAdded(
      product,
      currentVarietyDenomination
    );

    console.log({ product });

    console.log({ currentVarietyDenomination });

    if (foundProduct) {
      console.log(`encontrado`);

      plusOne(foundProduct);
    } else {
      console.log(`no encontrado`);
      addNewProduct(product, carritoId, currentVarietyDenomination);
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
    plusOne,
    minusOne,
  };
};

export default useProductCard;
