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
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
