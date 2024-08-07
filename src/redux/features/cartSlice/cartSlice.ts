import { createSlice } from "@reduxjs/toolkit";

type TCartProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stockQuantity: number;
  image: string;
};

type TCartState = {
  products: TCartProduct[];
};
const initialState: TCartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    removeAllProductsFromCart: (state) => {
      state.products = [];
    },
    increaseProductQuantityInCart: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += action.payload.quantity;
      }
    },
    decreaseProductQuantityInCart: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity -= action.payload.quantity;
      }
    },
  },
});

export const {
  addProductToCart,
  increaseProductQuantityInCart,
  decreaseProductQuantityInCart,
  removeProductFromCart,
  removeAllProductsFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
