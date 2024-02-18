import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [expire, setExpire] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect( () => {
    accessToken();
  }, []);
  
  const accessToken = async () => {
    try {
      const response = await axios.get("http://localhost:3001/token", { withCredentials: true });
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setUsername(decoded.username);
      setExpire(decoded.exp);
    } catch (error) {
      if (error) navigate("/");
    }
  };
  

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if( expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:3001/token", { withCredentials: true })
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setUsername(decoded.username);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
    );

    const getUser = async () => {
    try {
      const response = await axiosJWT.get("http://localhost:3001/getUser", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      if (error) console.error(error);
    }
  };
    
  return (
    <div>
      <Navbar username={username} />
      <button onClick={getUser}>getUser</button>
    </div>
  );
};

export default Dashboard;
