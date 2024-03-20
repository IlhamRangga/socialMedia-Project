import { useState } from "react";
import useToken from "./useToken";

const useConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversation] = useState([]);
  const [messages, setMessages] = useState([])
  const { axiosJWT, token } = useToken();

  const getConversation = async () => {
    setLoading(true);
    try {
      const response = await axiosJWT.get("http://localhost:3001/message/conversation/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setConversation(response.data.conversation);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching conversation:", error);
    } finally {
      setLoading(false);
    }
  };

  const getMessage = async ({id}) => {
    if(id === "ai") return
    setLoading(true)
    try {
      const response = await axiosJWT.get(`http://localhost:3001/message/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      console.log(response)
      setMessages(response)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  return { getConversation, conversations, getMessage, messages };
};

export default useConversation;
