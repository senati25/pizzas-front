const ROUTES = {
  api: 'http://127.0.0.1:8000/api',
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
    subCategories:{
      root:'subcategories',
      new:'new'
    }
  },
};

export default ROUTES;
