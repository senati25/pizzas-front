import { useEffect, useState } from 'react';
import ROUTES from '../helpers/constants';
import useStoreContext from './useStoreContext';

const useProductCard = () => {
  const {
    store: { fetchShoppingCart, shoppingCartProducts },
  } = useStoreContext();

  const [isLoading, setIsLoading] = useState(false);
  const [_isMounted, setIsMounted] = useState(true);

  const verifyProductAlreadyAdded = (product, currentVarietyDenomination) =>
    shoppingCartProducts.find(
      ({ producto_id: productId, variedad }) =>
        variedad === currentVarietyDenomination && productId === product.id
    );

  const addNewProduct = async (
    product,
    carritoId,
    currentVarietyDenomination
  ) => {
    setIsLoading(true);

    const response = await fetch(
      `${ROUTES.api}/publico/carritoTieneProducto/aniadir`,
      {
        method: 'POST',
        body: JSON.stringify({
          producto_id: product.id,
          carrito_id: carritoId,
          variedad: currentVarietyDenomination,
          cantidad: 1,
        }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const { error, message } = await response.json();

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
