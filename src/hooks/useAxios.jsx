import { useSelector } from "react-redux";
import axios from "axios";
//? axios instense klasörüdür kullanılan axiosları ortak yapı içine alınıp gerekli yerlerda k
const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });

  const axiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
  });

  return { axiosWithToken, axiosPublic };
};

export default useAxios;
