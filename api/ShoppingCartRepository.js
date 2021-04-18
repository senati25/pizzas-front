import ROUTES from '../app/helpers/constants';

const ShoppingCartRepository = {
  getAllProducts: async (shoppingCartId) => {
    const response = await fetch(
      `${ROUTES.api}/publico/carritoTieneProducto/${shoppingCartId}`
    );

    const data = await response.json();

    return data;
  },

  addProduct: async (productId, cartId, variety, quantity) => {
    const response = await fetch(
      `${ROUTES.api}/publico/carritoTieneProducto/aniadir`,
      {
        method: 'POST',
        body: JSON.stringify({
          producto_id: productId,
          carrito_id: cartId,
          variedad: variety,
          cantidad: quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();

    return data;
  },
};

export default ShoppingCartRepository;
