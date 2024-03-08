import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Button from "../../utils/Button";
import Thunder from "../../utils/Thunder";
import MatchRecord from "./MatchRecord";
import SelectItemList from "./SelectItemList";
import { useItem } from "../../../slices/itemsSlice";
import { PriceList } from "../../../lib/priceList";
import { setArtSelectDone } from "../../../slices/roomSlice";
import { SelectItemDoneMessageToServer } from "../../../lib/types";
import { socket } from "../../../lib/socket";

const OwnSelectStatus = () => {
  const [selectedItem, setSelectedItem] = useState<keyof PriceList | "null">(
    "null"
  );
  const items = useAppSelector((state) => state.items);
  const [battleButtonDisabled, setBattleButtonDisabled] =
    useState<boolean>(false);
  const { roomIndex, roomId, roomName, ownProperty } = useAppSelector(
    (state) => state.room
  );
  const dispatch = useAppDispatch();
  console.log(items);

  function handleBattle() {
    setBattleButtonDisabled(true);
    dispatch(useItem({ itemName: selectedItem }));
    dispatch(setArtSelectDone(true));

    const messageToServer: SelectItemDoneMessageToServer = {
      roomIndex: roomIndex!,
      roomId: roomId!,
      roomName: roomName!,
      user: {
        socketId: ownProperty.socketId!,
        userName: ownProperty.userName!,
        purchaseDone: true,
        artSelectDone: true,
        selectedItem,
      },
    };
    console.log("送信: selectItemDone");
    socket.emit("selectItemDone", messageToServer);
    console.log("送信完了: selectItemDone");
  }

  return (
    <div className="flex-[0.7] sm:border-r sm:border-r-stone-300 p-5 space-y-5">
      <MatchRecord />

      <p className="text-lg text-center">勝負するアート作品を選んでください</p>

      <SelectItemList
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />

      <div className="text-center lg:text-right">
        <Button
          onClick={handleBattle}
          className="relative lg:mr-14 xl:mr-20 2xl:mr-24 px-11 py-1"
          disabled={battleButtonDisabled}
        >
          勝負
          <div className="mt-2">
            <Thunder />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default OwnSelectStatus;
