import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import SideDrawer from "../components/Miscellaneous/SideDrawer.jsx";
import ChatBox from "../components/Miscellaneous/ChatBox.jsx";
import MyChats from "../components/Miscellaneous/MyChats.jsx";

const Chatpage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box>
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default Chatpage;
