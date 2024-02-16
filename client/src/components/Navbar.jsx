import React from "react";

const Navbar = () => {
  return (
    <nav className="container flex flex-row flex-wrap content-between bg-slate-200 justify-between p-3 font-bold text-md shadow-md">
      <div>
        <h2>Hallo</h2>
      </div>
      <div >
        <a href="/">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
