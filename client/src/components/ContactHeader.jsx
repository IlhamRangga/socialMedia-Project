import React from "react";
import { TfiWrite } from "react-icons/tfi";

const ContactHeader = () => {
  return (
    <div className="sticky z-20">
      <div className="flex bg-white w-full fixed justify-center mb-10 z-20 mt-0 top-0">
        <h2 className="font-bold text-lg m-2">Send a new message</h2>
        <button type="submit" className="flex items-center ">
          <TfiWrite className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ContactHeader;
