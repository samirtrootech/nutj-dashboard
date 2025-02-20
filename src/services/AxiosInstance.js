import axios from "axios";

const apiUrl = `${process.env.NEXT_PUBLIC_API_STAGGING_BASE_URL}/api/v1/`;
//const apiUrl = `http://192.168.0.156:8001/api/v1/`
//NEXT_PUBLIC_API_STAGGING_BASE_URL
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const auth = localStorage.getItem("AUTH_ACCESS_TOKEN");
    if (auth) {
      const result = auth?.substring(1, auth.length - 1);
      if (result) {
        config.headers["authorization"] = `Bearer ${result}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 && window.location.pathname !== "/login") {
      window.localStorage.clear();
      window.location.replace("/login");
      // window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
