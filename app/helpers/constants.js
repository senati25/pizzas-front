const ROUTES = {
  api: 'https://inviaggio-api.vercel.app/api/index.php/api',
  public: {
    home: '/',
    products: 'products',
    shoppingCart: 'shopping-cart',
  },
  dashboard: {
    root: 'admin',
    categories: {
      root: 'categories',
      new: 'new',
    },
  },
};

export default ROUTES;
