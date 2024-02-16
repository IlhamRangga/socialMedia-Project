import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

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
        console.log(error.response.data);
      }
    }
  };

  return (
    <div className="border-solid border-2 rounded-lg w-80 h-[400px] p-4 flex flex-col items-center m-4 shadow-md">
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
        <div className="flex items-center mt-8 justify-center">
          <button className="mb-2 w-40 bg-indigo-600 text-white rounded">Register</button>
        </div>
      </form>
      <h3 className="mt-14">
        Already have an account?
        <a href="/login" className="text-sky-500">
          Login
        </a>
      </h3>
    </div>
  );
};

export default RegisterForm;
