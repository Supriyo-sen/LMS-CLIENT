import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import courseReducer from "./slices/courseSlice";
import adminReducer from "./slices/adminSlice";
import paymentReducer from "./slices/paymentSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer,
    course: courseReducer,
    admin: adminReducer,
    payment: paymentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
