import { useEffect, useState } from "react";
import { socket } from "../../lib/socket";
import {
  CreateRoomMessageFromServer,
  CreateRoomMessageToServer,
  RoomState,
} from "../../lib/types";
import { useAppDispatch } from "../../app/hooks";
import { Phase, jumpPhase } from "../../slices/statusSlice";
import { setRoom } from "../../slices/roomSlice";
import Button from "../utils/Button";
import CustomHowler from "../utils/CustomHowler";
import InitialSound from "../../assets/bgm/initial/initial_short.mp3";

const Initial = () => {
  const [searching, setSearching] = useState<boolean>(false);
  const [isMatched, setIsMatched] = useState<boolean>(false);
  const [inputUser, setInputUser] = useState<string>("");
  const [inputRoomName, setInputRoomName] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!searching || isMatched) return;

    function onCreateRoomToClient(message: CreateRoomMessageFromServer) {
      console.log("createRoomToClient");
      console.log(message);
    }

    function onMatchingSuccessToClient(message: CreateRoomMessageFromServer) {
      const { roomIndex, roomId, roomName, matching, user1, user2 } = message;
      console.log("matching success!");
      setIsMatched(true);
      const setRoomPayload: Omit<
        RoomState,
        "matchNum" | "matchRecord" | "battleResult" | "matchResult"
      > = {
        roomIndex,
        roomId,
        roomName,
        matching,
        ownProperty:
          socket.id === user1.socketId
            ? {
                userType: "user1",
                socketId: user1.socketId!,
                userName: user1.userName!,
              }
            : {
                userType: "user2",
                socketId: user2!.socketId!,
                userName: user2!.userName!,
              },
        enemyProperty:
          socket.id === user1.socketId
            ? {
                userType: "user2",
                socketId: user2!.socketId!,
                userName: user2!.userName!,
              }
            : {
                userType: "user1",
                socketId: user1.socketId!,
                userName: user1.userName!,
              },
      };
      dispatch(setRoom(setRoomPayload));
      dispatch(jumpPhase(Phase.PURCHASE));
    }

    socket.on(`createRoomToClient:${inputRoomName}`, onCreateRoomToClient);
    console.log(`createRoomToClient:${inputRoomName} 準備完了`);

    socket.on(
      `matchingSuccessToClient:${inputRoomName}`,
      onMatchingSuccessToClient
    );
    console.log(`matchingSuccessToClient:${inputRoomName} 準備完了`);

    return () => {
      socket.off(`createRoomToClient:${inputRoomName}`, onCreateRoomToClient);
      console.log(`disconnect createRoomToClient:${inputRoomName}`);

      socket.off(
        `matchingSuccessToClient:${inputRoomName}`,
        onMatchingSuccessToClient
      );
      console.log(`disconnect matchingSuccessToClient:${inputRoomName}`);
    };
  }, [searching, isMatched]);

  function handleMatch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputUser.length === 0) {
      console.log("ユーザ名を入れてください");
      return;
    }

    if (inputRoomName.length === 0) {
      console.log("部屋名を入れてください");
      return;
    }

    setSearching(true);
    console.log("送信: createRoom");
    const messageToServer: CreateRoomMessageToServer = {
      type: "createRoom",
      roomName: inputRoomName,
      userName: inputUser,
    };
    socket.emit("createRoom", messageToServer);
    console.log("送信完了: createRoom");
  }

  return (
    <>
      <CustomHowler src={InitialSound} />
      <form
        onSubmit={handleMatch}
        className="flex flex-col sm:flex-row gap-8 sm:gap-5 mt-10 sm:mt-5"
      >
        <input
          type="text"
          value={inputUser}
          onChange={(e) => setInputUser(e.target.value)}
          className="mx-5 sm:mx-0 p-5 border rounded-lg"
          placeholder="プレイヤー名"
        />
        <input
          type="text"
          value={inputRoomName}
          onChange={(e) => setInputRoomName(e.target.value)}
          className="mx-5 sm:mx-0 p-5 border rounded-lg"
          placeholder="部屋名"
        />
        <Button type="submit" className="mx-5 sm:mx-0">
          {searching ? "マッチ中" : "マッチする"}
        </Button>
      </form>
    </>
  );
};

export default Initial;
