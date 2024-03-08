import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ITEM_LIST } from "../../lib/priceList";
import { socket } from "../../lib/socket";
import { BattleResultMessageToServer } from "../../lib/types";
import { useItemReset } from "../../slices/itemsSlice";
import {
  setArtSelectDone,
  setEnemyArtSelectDone,
} from "../../slices/roomSlice";
import { Phase, jumpPhase, nextPhase } from "../../slices/statusSlice";
import Button from "../utils/Button";

const BattleResult = () => {
  const {
    selectedItem: selectedItemId,
    enemySelectedItem: enemySelectedItemId,
  } = useAppSelector((state) => state.items);
  const { matchNum, matchRecord, battleResult, roomIndex, roomId, roomName } =
    useAppSelector((state) => state.room);
  const dispatch = useAppDispatch();
  console.log("selectedItemId: " + selectedItemId);
  console.log("enemySelectedItemId: " + enemySelectedItemId);

  const selectedItemName =
    selectedItemId === "null"
      ? "なし"
      : ITEM_LIST.find((item) => item.id === selectedItemId)!.name;

  const enemySelectedItemName =
    enemySelectedItemId === "null"
      ? "なし"
      : ITEM_LIST.find((item) => item.id === enemySelectedItemId)!.name;

  function handleNextGame() {
    const { win, lose, draw } = matchRecord;
    if (win + lose + draw === matchNum) {
      dispatch(nextPhase());
      return;
    }
    dispatch(useItemReset());
    dispatch(setArtSelectDone(false));
    dispatch(setEnemyArtSelectDone(false));

    const messageToServer: BattleResultMessageToServer = {
      roomIndex: roomIndex!,
      roomId: roomId!,
      roomName: roomName!,
    };
    console.log("送信: battleResult");
    socket.emit("battleResult", messageToServer);
    console.log("送信完了: battleResult");

    dispatch(jumpPhase(Phase.BATTLE));
  }
  return (
    <div>
      <div>
        <h2>あなたの選択した作品</h2>
        <span>{selectedItemName}</span>
      </div>
      <div>
        <h2>相手の選択した作品</h2>
        <span>{enemySelectedItemName}</span>
      </div>
      <h2>
        {battleResult === "win"
          ? "勝ち！"
          : battleResult === "lose"
          ? "負け..."
          : "引き分け"}
      </h2>
      <Button onClick={handleNextGame}>次のゲームへ</Button>
    </div>
  );
};

export default BattleResult;
