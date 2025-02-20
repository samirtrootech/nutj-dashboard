import axios from "axios";
import { FETCH_ACTION } from "@/redux/slices/auth/type";

export const axiosMiddleware = (store) => (next) => (action) => {
  if (action.type === `${FETCH_ACTION}/fulfilled`) {
    setInterceptors(store);
  }
  return next(action);
};

export const setInterceptors = (store) => {
  if (!store) {
    return;
  }

  axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );
};
