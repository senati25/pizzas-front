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

  deleteProduct: async (productCartId, cartId) => {
    const response = await fetch(
      `${ROUTES.api}/publico/carritoTieneProducto/eliminar`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: productCartId, carrito_id: cartId }),
      }
    );

    const data = await response.json();

    return data;
  },

  changeProductQuantity: async (id, newQuantity) => {
    const response = await fetch(
      `${ROUTES.api}/publico/carritoTieneProducto/aumentarUnidad/${id}`,
      {
        method: 'POST',
        body: JSON.stringify({ cantidad: newQuantity }),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();

    return data;
  },
};

export default ShoppingCartRepository;
