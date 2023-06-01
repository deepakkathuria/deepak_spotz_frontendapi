const { createSlice } = require("@reduxjs/toolkit");
import payloadAction from "@reduxjs/toolkit";

const initialState = {
  category: "",
  categoryName: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCategoryName: (state, action) => {
      state.categoryName = action.payload;
    },
  },
});

export const { setCategory, setCategoryName } = searchSlice.actions;
export default categorySlice.reducer;
