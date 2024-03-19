import React, { useEffect } from "react";
import useLogout from "../hooks/useLogout";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { axiosJWT, generateToken, token } = useToken();
  const { loading, logout } = useLogout();

  useEffect(() => {
    generateToken();
  }, []);

  const navigate = useNavigate();

  const clickButton = async () => {
    try {
      const response = await axiosJWT.get(
        "http://localhost:3001/getUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        { withCredentials: true }
      );
      return response.data.user;
    } catch (error) {
      navigate("/login");
    }
  };

  return (
    <>
      <button onClick={clickButton}>halos</button>
      <Navbar />
    </>
  );
};

export default HomePage;
