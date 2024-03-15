import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { socket } from "../../lib/socket";
import { PurchaseDoneMessageFromServer } from "../../lib/types";
import { setEnemyPurchaseDone } from "../../slices/roomSlice";
import PurchaseCard from "../PurchaseCard";
import { nextPhase } from "../../slices/statusSlice";
import CustomHowler from "../utils/CustomHowler";
import PurchaseSound from "../../assets/bgm/purchase/purchase_short.mp3";

const Purchase = () => {
  const room = useAppSelector((state) => state.room);
  const { roomId, ownProperty, enemyProperty } = room;
  const dispatch = useAppDispatch();

  useEffect(() => {
    function onPurchaseDoneToClient(message: PurchaseDoneMessageFromServer) {
      const { user1, user2 } = message;
      const isEnemyPurchaseDone =
        (ownProperty.userType === "user1" && user2.purchaseDone) ||
        (ownProperty.userType === "user2" && user1.purchaseDone);

      if (isEnemyPurchaseDone) {
        dispatch(setEnemyPurchaseDone());
      }

      console.log("purchaseDoneToClient");
      console.log(message);
    }

    socket.on(`purchaseDoneToClient:${roomId}`, onPurchaseDoneToClient);
    console.log(`purchaseDoneToClient:${roomId} 準備完了`);

    function onPrepareForBattleDoneToClient(_: PurchaseDoneMessageFromServer) {
      if (!enemyProperty.purchaseDone) {
        dispatch(setEnemyPurchaseDone());
      }
      dispatch(nextPhase());
    }

    socket.on(
      `prepareForBattleDoneToClient:${roomId}`,
      onPrepareForBattleDoneToClient
    );
    console.log(`prepareForBattleDoneToClient:${roomId} 準備完了`);

    return () => {
      socket.off(`purchaseDoneToClient:${roomId}`, onPurchaseDoneToClient);
      console.log(`socket.off: purchaseDoneToClient:${roomId}`);

      socket.off(
        `prepareForBattleDoneToClient:${roomId}`,
        onPrepareForBattleDoneToClient
      );
      console.log(`socket.off: prepareForBattleDoneToClient:${roomId}`);
    };
  }, []);

  return (
    <>
      <CustomHowler src={PurchaseSound} />
      <PurchaseCard />
    </>
  );
};

export default Purchase;
