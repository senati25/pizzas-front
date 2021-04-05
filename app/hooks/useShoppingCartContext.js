import { useContext, useMemo } from 'react';
import shoppingCartContext from '../context/shoppingCart';

const useShoppingCartContext = () => {
  const { shoppingCartList, setShoppingCartList } = useContext(
    shoppingCartContext
  );

  const shoppingCartLength = useMemo(() => shoppingCartList.length, [
    shoppingCartList.length,
  ]);

  return { shoppingCartList, setShoppingCartList, shoppingCartLength };
};

export default useShoppingCartContext;
