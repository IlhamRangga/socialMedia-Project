import React from "react";
import { Link } from "react-router-dom";
import { GoHome, GoSearch } from "react-icons/go";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoCloudUploadOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="relative mt-16">
        <div className="min-h-10 bg-white w-full fixed bottom-0 left-0 right-0 z-10 flex gap-4 justify-around items-center p-2">
          <Link to="/">
            <GoHome className="w-8 h-auto"/>
          </Link>
          <Link>
            <GoSearch className="w-8 h-auto"/>
          </Link>
          <Link>
            <IoCloudUploadOutline className="w-8 h-auto"/>
          </Link>
          <Link to="/message">
            <TbMessageCircle2 className="w-8 h-auto"/>
          </Link>
          <Link>
            <div className="avatar max-w-10">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
