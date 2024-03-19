import { useState } from "react";
import useToken from "./useToken";

const useConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversation] = useState([]);
  const {axiosJWT, token} = useToken()

  const getConversation = async () => {
    setLoading(true)
    try {
      const response = await axiosJWT.get("http://localhost:3001/message/conversation/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      console.log(response.data.user);
      setConversation(response.data.user)
    } catch (error) {
        setLoading(false)
      console.error("Error fetching conversation:", error);
    } finally {
        setLoading(false)
    }
  };

  return { getConversation, conversations };
};

export default useConversation;
