import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/login", {
        username,
        password
      }, { withCredentials: true });
      navigate("/dashboard");
    } catch (error) {
      if (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="border-solid border-2 rounded-lg w-80 h-[300px] p-4 flex flex-col items-center m-4 shadow-md">
      <h1 className="font-bold text-xl">Login</h1>
      <form  onSubmit={login} className="w-full h-56 p-3 space-y-2 m-2 flex flex-col">
        <div>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=" w-full h-12 font-bold border-b-2 border-b-yellow-400 bg-transparent outline-none "
            required
          />{" "}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" w-full h-12 font-bold border-b-2 border-b-yellow-400 bg-transparent outline-none "
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button className=" mb-1 h-8 w-40 bg-indigo-600 text-white rounded ">Login</button>
        </div>
      </form>
      <h3 className="">
        Don't have an account?
        <a href="/register" className="text-sky-500">
          Register
        </a>
      </h3>
      <h2 className="text-red-700 mt-3 text-center">{error}</h2>
    </div>
  );
};

export default LoginForm;
