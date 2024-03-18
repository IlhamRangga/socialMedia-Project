import React from "react";
import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

const ContactHeader = () => {
  return (
    <>
      <div>
        <div>
          <h2>New chat</h2>
          <input type="text" className="border text-sm rounded-xl flex-grow p-1 border-slate-600 overflow-auto h-10 pr-12" placeholder="Send a message" />
          <button type="submit" className="absolute flex items-center inset-y-0 right-0 pr-4 ">
            <TfiWrite className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
