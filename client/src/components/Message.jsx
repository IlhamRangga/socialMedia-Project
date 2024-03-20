import React from "react";

const Message = ({message, senderId}) => {
  return (

    <div className={"chat chat-end"}>
      <div className="chat-bubble p-2 text-[15px] max-w-[60%] overflow-wrap break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus sapiente quo voluptas officiis voluptate vel dolorem maxime porro tenetur cupiditate nobis qui quod, veritatis ipsam eos molestiae iusto nihil?.</div>
      <div className="chat-footer opacity-50">2 hours ago</div>
    </div>
  );
};

export default Message;
