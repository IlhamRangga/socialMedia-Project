import React, { useEffect } from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import ContactHeader from "../components/ContactHeader";
import useConversation from "../hooks/useConversation";

const ContactPage = () => {
  const {getConversation, conversations} = useConversation()

  useEffect(() => {
    getConversation()
  },[])

  return (
    <>
      <ContactHeader />
      <div className="mt-12">
        <Contact username={"Artificial Intelegence"} id={"ai"}/>
        {conversations.map((data) => (
          <Contact 
            key={data.id}
            username={data.username}
            id={data.conversationId}
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

export default ContactPage;
