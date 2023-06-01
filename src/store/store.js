import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
// import userReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
  },
});

// export const store = makeStore();

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
