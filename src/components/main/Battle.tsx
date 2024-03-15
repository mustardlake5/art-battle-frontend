import { useEffect } from "react";
import BattleSelectItem from "./battle/BattleSelectItem";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { socket } from "../../lib/socket";
import { setBattleResult, setEnemyArtSelectDone } from "../../slices/roomSlice";
import { nextPhase } from "../../slices/statusSlice";
import {
  BothPlayerSelectDoneMessage,
  EitherPlayerSelectDoneMessage,
} from "../../lib/types";
import { judgeBattleResult } from "../../lib/judgeBattleResult";
import { enemyUseItem } from "../../slices/itemsSlice";
import BattleSound from "../../assets/bgm/battle/evenSituation/even_short.mp3";
import CustomHowler from "../utils/CustomHowler";

const BATTLE_EVENT = {
  eitherPlayerSelectDone: "eitherPlayerSelectDone",
  bothPlayerSelectDone: "bothPlayerSelectDone",
};

const { eitherPlayerSelectDone, bothPlayerSelectDone } = BATTLE_EVENT;

const Battle = () => {
  const room = useAppSelector((state) => state.room);
  const { roomId, ownProperty, enemyProperty } = room;
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eitherPlayerSelectDone
    function onEitherPlayerSelectDone(message: EitherPlayerSelectDoneMessage) {
      const { user1, user2 } = message;
      const isEnemyBattleItemSelectDone =
        (ownProperty.userType === "user1" && user2.artSelectDone) ||
        (ownProperty.userType === "user2" && user1.artSelectDone);
      if (isEnemyBattleItemSelectDone) {
        dispatch(setEnemyArtSelectDone(true));
      }
    }
    socket.on(`${eitherPlayerSelectDone}:${roomId}`, onEitherPlayerSelectDone);
    console.log(`${eitherPlayerSelectDone}:${roomId} 準備完了`);

    // bothPlayerSelectDone
    function onBothPlayerSelectDone(message: BothPlayerSelectDoneMessage) {
      const user = message[ownProperty.userType!];
      const enemy = message[enemyProperty.userType!];
      if (!enemyProperty.artSelectDone) {
        dispatch(setEnemyArtSelectDone(true));
      }
      dispatch(enemyUseItem({ itemName: enemy.selectedItem! }));
      const battleResult = judgeBattleResult(
        user.selectedItem,
        enemy.selectedItem
      );
      dispatch(setBattleResult(battleResult));
      dispatch(nextPhase());
    }

    socket.on(`${bothPlayerSelectDone}:${roomId}`, onBothPlayerSelectDone);
    console.log(`${bothPlayerSelectDone}:${roomId} 準備完了`);

    return () => {
      // socket.off eitherPlayerSelectDone
      socket.off(
        `${eitherPlayerSelectDone}:${roomId}`,
        onEitherPlayerSelectDone
      );
      console.log(`socket.off: ${eitherPlayerSelectDone}:${roomId}`);

      // socket.off bothPlayerSelectDone
      socket.off(`${bothPlayerSelectDone}:${roomId}`, onBothPlayerSelectDone);
      console.log(`socket.off: ${bothPlayerSelectDone}:${roomId}`);
    };
  }, []);

  return (
    <>
      <CustomHowler src={BattleSound} />
      <BattleSelectItem />
    </>
  );
};

export default Battle;
