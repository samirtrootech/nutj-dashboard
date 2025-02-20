import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { axiosMiddleware } from "@/axiosSettings";

// import authReducer from "../slices/auth/auth.slice"

const rootReducer = combineReducers({
  // auth: authReducer,

});

const initializeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        axiosMiddleware
      ),
    devTools: true,
  });

// export const wrapper = createWrapper(initializeStore);

export const store = initializeStore();

// Infer types from the store
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof initializeStore>["dispatch"];
