import React from "react";
import { Link } from "react-router-dom";

const Contact = ({username, }) => {
  return (
    <>
      <Link to="/conversation" className="flex gap-2 rounded flex-row mt-1 p-1 hover:bg-slate-300 cursor-pointer">
        <div className="flex items-center justify-center">
          <div className="avatar online max-w-14">
            <div className="w-14 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className="flex flex-row min-w-0">
          <div className="overflow-hidden">
            <h1 className="text-base font-medium truncate">{username}</h1>
            {/* <h1 className="text-s truncate">halo </h1> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Contact;
