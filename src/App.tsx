import { useEffect } from "react";
import Footer from "./page/Footer";
import Header from "./page/Header";
import Main from "./page/Main";
import { socket } from "./lib/socket";
import { useAppSelector } from "./app/hooks";

function App() {
  const phase = useAppSelector((state) => state.status.phase);

  useEffect(() => {
    function onConnect() {
      console.log("connected: " + socket.id);
    }

    function onDisconnect() {
      console.log("disconnected");
    }

    socket.connect();

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("socket.off: connect", onConnect);
      socket.off("socket.off: disconnect", onDisconnect);
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header phase={phase} />
      <Main phase={phase} />
      <Footer />
    </div>
  );
}

export default App;
