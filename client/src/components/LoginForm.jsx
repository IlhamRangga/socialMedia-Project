import React from "react";

const LoginForm = () => {
  return (
    <div className="border-solid border-2 rounded-lg w-80 h-72 p-4 flex flex-col items-center m-4 shadow-md">
      <h1 className="font-bold text-xl">Login</h1>
      <form className="w-full h-36 p-3 space-y-2 m-1">
        <div>
          <input type="text" placeholder="Username" className=" w-full h-12 font-bold border-b-2 border-b-yellow-400 bg-transparent outline-none " required />
        </div>
        <div>
          <input type="password" placeholder="Password" className=" w-full h-12 font-bold border-b-2 border-b-yellow-400 bg-transparent outline-none " required />
        </div>
      </form>
      <button className=" mb-2 h-8 w-40 bg-indigo-600 text-white rounded ">Login</button>
      <h3 className="">Don't have an account? <a href="/" className="text-sky-500">Register</a></h3>
    </div>
  );
};

export default LoginForm;
