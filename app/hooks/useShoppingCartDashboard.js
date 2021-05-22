import { useContext, useEffect, useState } from 'react';
import ShoppingCartDashboardContext from '../context/shoppingCartDashboardContext';

const useShoppingCartDashboard = () => {
  const {shoppingCartProducts} = useContext(ShoppingCartDashboardContext);
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
  ) => {console.log(product)}
  const handleUpdateShoppingCartProduct = async (shoppingCartProduct) => {
  

   
  };

  const handleAddProduct = async (product, currentVarietyDenomination) => {

    const foundProduct = verifyProductAlreadyAdded(
      product,
      currentVarietyDenomination
    );

    if (foundProduct)
      return handleUpdateShoppingCartProduct({
        ...foundProduct,
        cantidad: foundProduct.cantidad + 1,
      });

    return addNewProduct(product, currentVarietyDenomination);
  };

  const handleDeleteShoppingCartProduct = async (shoppingCartProduct) => {
    
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

export default useShoppingCartDashboard;
