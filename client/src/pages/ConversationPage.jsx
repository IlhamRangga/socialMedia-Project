import React from "react";
import ConversationHeader from "../components/ConversationHeader";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";

const ConversationPage = () => {
  return (
    <>
      <ConversationHeader />
      <div className="mb-16">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <MessageInput />
    </>
  );
};

export default ConversationPage;
