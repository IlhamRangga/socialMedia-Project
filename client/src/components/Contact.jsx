import React from "react";
import ProfilePicture from "./ProfilePicture";

const Contact = () => {
  return (
    <div className="min-w-80">
      <div className="flex flex-row mt-4 bg-emerald-400 p-1">
        <div className="flex items-center justify-center">
          <ProfilePicture />
        </div>
        <div>
          <h1>ilham</h1>
        </div>
        <div>
          <h4>apakabar</h4>
        </div>
      </div>
      <div className="flex flex-row max-w-10 mt-4">
        <ProfilePicture />
        <div>
          <h1>rangga</h1>
        </div>
        <div>
          <h4>apakabar</h4>
        </div>
      </div>
      <div className="flex flex-row max-w-10 mt-2">
        <ProfilePicture />
        <div>
          <h1>kurniawan</h1>
        </div>
        <div>
          <h4>apakabar</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
