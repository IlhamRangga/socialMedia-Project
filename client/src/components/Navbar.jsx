import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = ({username}) => {
  const navigate = useNavigate()
  const logout = async () => {
    try {
      await axios.delete("http://localhost:3001/logout", { withCredentials: true })
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav className="container flex flex-row flex-wrap content-between bg-slate-200 justify-between p-3 font-bold text-md shadow-md">
      <div>
        <h2>{username}</h2>
      </div>
      <div >
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
