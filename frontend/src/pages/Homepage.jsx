import "./Homepage.css";
import Login from "../components/Authentication/Login.jsx";
import { useNavigate } from "react-router-dom";
import Signup from "../components/Authentication/Signup.jsx";
import {
  Container,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useEffect } from "react";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) navigate("/chat");
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        p={1}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="2px"
      >
        <Text fontSize="4xl" color="white" fontWeight="600" textAlign="center">
          ChatApp
        </Text>
      </Box>
      <Box
        bg="rgb(0,13,48)"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="4px"
        borderColor="white"
        color="white"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
