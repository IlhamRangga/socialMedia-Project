import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/register", {
        username,
        email,
        password,
        confPassword,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="border-solid border-2 rounded-lg w-80 h-[440px] p-4 flex flex-col items-center m-4 shadow-md">
      <h1 className="font-bold text-xl">Register</h1>
      <form onSubmit={register} className="w-full h-56 p-3 space-y-2 m-2 flex flex-col">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=" w-full h-12 font-bold border-b-2 border-b-yellow-400 bg-transparent outline-none "
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" w-full h-12 font-bold border-b-2 border-b-yellow-400 bg-transparent outline-none "
            required
          />
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
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            className=" w-full h-12 font-bold border-b-2 border-b-yellow-400 bg-transparent outline-none "
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="mb-2 w-40 h-8 bg-indigo-600 text-white rounded">Register</button>
        </div>
      </form>
      <h3 className="mt-14">
        Already have an account?
        <a className="text-sky-500" href="/">
          Login
        </a>
      </h3>
      <h2 className="text-red-700 mt-3 text-center">{error}</h2>
    </div>
  );
};

export default RegisterForm;
