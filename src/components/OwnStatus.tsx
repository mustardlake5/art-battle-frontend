import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ItemList from "./ItemList";
import Button from "./utils/Button";
import { setPurchaseDone } from "../slices/roomSlice";
import { PurchaseDoneMessageToServer } from "../lib/types";
import { socket } from "../lib/socket";

const OwnStatus = () => {
  const money = useAppSelector((state) => state.items.money);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const room = useAppSelector((state) => state.room);
  const { roomIndex, roomId, roomName, ownProperty } = room;
  const [isPurchased, setIsPurchased] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function handlePurchase() {
    setIsPurchased(true);
    dispatch(setPurchaseDone());
    console.log("送信: purchaseDone");
    const messageToServer: PurchaseDoneMessageToServer = {
      type: "purchaseDone",
      roomIndex: roomIndex!,
      roomId: roomId!,
      roomName: roomName!,
      user: {
        socketId: ownProperty.socketId!,
        userName: ownProperty.userName!,
        purchaseDone: true,
      },
    };
    socket.emit("purchaseDone", messageToServer);
    console.log("送信完了: purchaseDone");
  }

  return (
    <div className="flex-[0.7] border-r border-r-stone-300 p-5">
      <div className="flex justify-around">
        <h3 className="text-lg font-bold">商品一覧</h3>
        <h3 className={`text-lg font-bold ${money < 0 && "text-red-500"}`}>
          残高：{money}円
        </h3>
      </div>

      <ItemList />

      <div className="flex flex-col items-end gap-3 mt-2">
        <h3 className="text-lg font-bold">合計：{totalAmount}円</h3>
        <Button
          onClick={handlePurchase}
          disabled={money - totalAmount < 0 || isPurchased}
        >
          購入する
        </Button>
      </div>
    </div>
  );
};

export default OwnStatus;
