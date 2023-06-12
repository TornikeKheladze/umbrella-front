import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [{}],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    storeProducts: (state, { payload }) => {
      state.products = [...payload];
    },
  },
});

export const { storeProducts } = productsSlice.actions;

export default productsSlice.reducer;
