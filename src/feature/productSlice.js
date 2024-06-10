import { createSlice } from "@reduxjs/toolkit";

export const STATUSSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSSES.SUCCESS,
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
  return async function fetchProdThunk(dispatch) {
    dispatch(setStatus(STATUSSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProduct(data));
      dispatch(setStatus(STATUSSES.SUCCESS));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSSES.ERROR));
    }
  };
}
