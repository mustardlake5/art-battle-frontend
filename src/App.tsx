import { useEffect, useState } from "react";
import Footer from "./page/Footer";
import Header from "./page/Header";
import Main from "./page/Main";
import { socket } from "./lib/socket";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Phase } from "./slices/statusSlice";
import NoticeModal from "./components/utils/NoticeModal";
import { setMute } from "./slices/soundSlice";

function App() {
  const [displayModal, setDisplayModal] = useState<boolean>(true);
  const phase = useAppSelector((state) => state.status.phase);
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    const mute = localStorage.getItem("mute");
    if (mute) {
      setDisplayModal(false);
      dispatch(setMute(mute === "true"));
    } else {
      setDisplayModal(true);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen h-dvh">
      {phase === Phase.INITIAL && displayModal && (
        <NoticeModal setDisplayModal={setDisplayModal} />
      )}
      <Header phase={phase} />
      <Main phase={phase} />
      <Footer />
    </div>
  );
}

export default App;
