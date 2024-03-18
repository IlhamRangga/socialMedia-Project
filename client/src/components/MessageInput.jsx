import React from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0">
      <div className="bg-red w-full min-h-14  relative bg-white">
        <form className="p-2">
          <div className="w-full flex items-center relative mb-1">
            <input
              type="text"
              className="border text-sm rounded-xl flex-grow p-1 border-slate-600 overflow-auto h-10 pr-12" 
              placeholder="Send a message"
            />
            <button type="submit" className="absolute flex items-center inset-y-0 right-0 pr-4 ">
              <BsSend className="h-6 w-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageInput;
