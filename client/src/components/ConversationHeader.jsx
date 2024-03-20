import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const ConversationHeader = () => {
  return (
    <div className="sticky top-0 bg-white pr-3 py-2 mb-2 z-10 flex gap-2 text-center items-center">
      <Link to="/contact" >
        <GoArrowLeft className="w-5 h-5 ml-2"/>
      </Link>
      <div className="avatar online">
        <div className="w-10 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="overflow-hidden">
        <h1 className="text-base font-medium truncate">Ilham Rangga Kurniawan gmaladasda</h1>
      </div>
    </div>
  );
};

export default ConversationHeader;
