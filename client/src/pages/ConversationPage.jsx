import React, { useEffect } from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import ContactHeader from "../components/ContactHeader";
import useConversation from "../hooks/useConversation";

const ConversationPage = () => {
  const {getConversation, conversations} = useConversation()

  useEffect(() => {
    getConversation()
  },[])

  return (
    <>
      <ContactHeader />
      <div className="mt-12">
        {conversations.map((conversation) => (
          <Contact 
            key={conversation.id}
            username={conversation.username}
          />
        ))}
        {/* <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact /> */}
      </div>
      <Navbar />
    </>
  );
};

export default ConversationPage;
