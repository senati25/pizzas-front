export const actionType = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  UPDATE_CLIENT_FORM: 'UPDATE_CLIENT_FORM',
  RESET_FORM: 'RESET_FORM',
  RESET_INITIAL_STATE: 'RESET_INITIALSTATE',
  SET_SUBMIT_DISABLED: 'SET_SUBMIT_DISABLED',
  LOADING_TRUE: 'LOADING_TRUE',
  LOADING_FALSE: 'LOADING_FALSE',
  SET_FORM_VALUES: 'SET_FORM_VALUES',
};

const initialStateForm = {
  nombre: '',
  apellido: '',
  dni: '',
  correo: '',
  direccion: '',
};

export const initialState = {
  shoppingCart: [],
  formValues: { ...initialStateForm },
  submitDisabled: true,
  isLoading: false,
};

export const orderReducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_PRODUCT:
      return {
        ...state,
        shoppingCart: state.shoppingCart.some(
          (product) =>
            product.id === action.payload.id &&
            product.denominacion === action.payload.denominacion
        )
          ? state.shoppingCart.map((product) =>
              product.id === action.payload.id &&
              product.denominacion === action.payload.denominacion
                ? {
                    ...product,
                    cantidad: product.cantidad + action.payload.cantidad,
                  }
                : product
            )
          : [...state.shoppingCart, action.payload],
      };

    case actionType.DELETE_PRODUCT:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (product, i) => i !== action.payload
        ),
      };

    case actionType.RESET_FORM:
      return { ...state, initialStateForm };

    case actionType.SET_FORM_VALUES:
      return { ...state, formValues: { ...action.payload } };

    case actionType.LOADING_TRUE:
      return { ...state, isLoading: true };

    case actionType.SET_SUBMIT_DISABLED:
      return { ...state, submitDisabled: action.payload };

    case actionType.LOADING_FALSE:
      return { ...state, isLoading: false };

    case actionType.RESET_INITIAL_STATE:
      return initialState;

    default:
      throw new Error();
  }
};
