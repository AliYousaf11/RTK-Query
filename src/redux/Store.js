import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { GetApi } from "../services/GetApi";

const store = configureStore({
  reducer: {
    [GetApi.reducerPath]: GetApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GetApi.middleware),
});
setupListeners(store.dispatch);
export default store;
