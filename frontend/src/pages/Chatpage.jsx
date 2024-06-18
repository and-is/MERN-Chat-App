import axios from "axios";
import { useState, useEffect } from "react";

const Chatpage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/chat");
      console.log(response.data);
      setChats(response.data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {console.log(chats)}
      {chats.map((chat) => (
        <div key={chat._id}>
          <p>{chat.chatName}</p>
        </div>
      ))}
    </div>
  );
};

export default Chatpage;
