import React from "react";

const RegisterForm = () => {
  return (
    <div className="border-solid border-2 rounded-lg w-80 h-96 p-4 flex flex-col items-center bg-indigo-600 m-4 text-white">
        <h1>Register</h1>
        <form className="w-full h-52 p-3 space-y-2 m-3">
          <input type="text" placeholder="Username" className=" w-full h-12 bg font-bold border-b-2 border-b-yellow-400 bg-transparent placeholder-white outline-none " required/>
          <input type="email" placeholder="Email" className=" w-full h-12 bg font-bold border-b-2 border-b-yellow-400 bg-transparent placeholder-white outline-none " required/>
          <input type="password" placeholder="Password" className=" w-full h-12 bg font-bold border-b-2 border-b-yellow-400 bg-transparent placeholder-white outline-none " required/>
          <input type="password" placeholder="Confirm Password" className=" w-full h-12 bg font-bold border-b-2 border-b-yellow-400 bg-transparent placeholder-white outline-none " required/>
        </form>
        <button className="m-5 h-8 w-40 bg-white rounded text-slate-800">Register</button>
        <h3 className="text-white">Already have an account? Log in</h3>
    </div>
  );
};

export default RegisterForm;
