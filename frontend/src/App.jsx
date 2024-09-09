import "./App.css";
import ChatProvider from "./Context/ChatProvider.jsx";

function App() {
  return (
    <ChatProvider>
      <div className="App"></div>
    </ChatProvider>
  );
}

export default App;
