import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAuthContext } from "../context/AuthContext";

const useToken = () => {
  const [token, setToken] = useState("");
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const generateToken = async () => {
    try {
      const response = await axios.get("http://localhost:3001/token", { withCredentials: true });
      setToken(response.data.accessToken);
      setAuthUser(true);
      localStorage.setItem("authenticated", true);
    } catch (error) {
      setAuthUser(null);
      localStorage.removeItem("authenticated");
      navigate("/");
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const response = await axios.get("http://localhost:3001/token", { withCredentials: true });
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setAuthUser(true);
      setToken(response.data.accessToken);
      localStorage.setItem("authenticated", true);

      return config;
    },
    (error) => {
      setAuthUser(null);
      localStorage.removeItem("authenticated");
      navigate("/");
      return Promise.reject(error);
    }
  );

  return { axiosJWT, generateToken, token };
};

export default useToken;
