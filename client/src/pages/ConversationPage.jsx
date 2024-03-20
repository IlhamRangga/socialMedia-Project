import React, { useEffect } from "react";
import ConversationHeader from "../components/ConversationHeader";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";
import { useParams } from "react-router-dom";
import useConversation from "../hooks/useConversation";

const ConversationPage = ( ) => {
  const id = useParams()

  const {getMessage, messages}= useConversation()

  useEffect(() => {
    getMessage(id)
  }, [])

  return (
    <>
      <ConversationHeader />
      <div className="mb-16">
        { messages.map(message => {
          <Message 
            key={message.id}
            message={message.message}
            sender={message.SenderId}
          />
        })}
      </div>
      <MessageInput />
    </>
  );
};

export default ConversationPage;