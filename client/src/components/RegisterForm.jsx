import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister.js";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const { loading, register } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ username, email, password, confPassword });
  };

  return (
    <div className="flex items-center justify-center min-w-80 mx-auto bg-gradient-to-br from-sky-500 to-fuchsia-500 h-screen">
      <div className="w-full p-6 rounded-lg shadow-m bg-white bg-opacity-45 max-w-96">
        <h1 className="text-3xl font-semibold text-center">
          Sign Up <span className="text-indigo-500"> Social Media</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Username" className="w-full input input-bordered h-10" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="w-full input input-bordered h-10" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} required />
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-6 mb-3 btn-primary">Sign Up</button>
          </div>
          <Link to="/login">Already have account?</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
