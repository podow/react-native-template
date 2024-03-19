import axios from "axios";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosConfig = axios.create({
  baseURL: Constants?.expoConfig?.extra?.API_URL,
});

axiosConfig.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("@token");

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosConfig;
