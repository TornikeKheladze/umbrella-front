import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/global";

const initialState = {
  products: [{}],
  categories: [{}],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    storeProducts: (state, { payload }) => {
      const withCategoryAndKeys = payload?.map((product: Product) => {
        return {
          ...product,
          category: product.categories
            .map(({ category }) => category)
            .join(","),
          key: product.id,
        };
      });
      state.products = [...withCategoryAndKeys];
    },
    storeCategories: (state, { payload }) => {
      state.categories = [...payload];
    },
  },
});

export const { storeProducts } = productsSlice.actions;

export default productsSlice.reducer;
