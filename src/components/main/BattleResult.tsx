import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ITEM_LIST } from "../../lib/priceList";
import { socket } from "../../lib/socket";
import { BattleResultMessageToServer } from "../../lib/types";
import { useItemReset } from "../../slices/itemsSlice";
import {
  setArtSelectDone,
  setEnemyArtSelectDone,
  setMatchResult,
} from "../../slices/roomSlice";
import { Phase, jumpPhase, nextPhase } from "../../slices/statusSlice";
import Button from "../utils/Button";
import { getMatchResult } from "../../lib/getMatchResult";
import CustomHowler from "../utils/CustomHowler";
import BattleResultWinSound from "../../assets/bgm/battle/win/角砂糖をもうひとつ_short.mp3";
import BattleResultLoseSound from "../../assets/bgm/battle/lose/クローズドサークル_short.mp3";
import BattleResultDrawSound from "../../assets/bgm/battle/even/道化のピアノ_short.mp3";

const BattleResult = () => {
  const {
    selectedItem: selectedItemId,
    enemySelectedItem: enemySelectedItemId,
  } = useAppSelector((state) => state.items);
  const { matchNum, matchRecord, battleResult, roomIndex, roomId, roomName } =
    useAppSelector((state) => state.room);
  const dispatch = useAppDispatch();

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
      const matchResult = getMatchResult(win, lose);
      dispatch(setMatchResult(matchResult));
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
    <>
      <CustomHowler
        src={
          battleResult === "win"
            ? BattleResultWinSound
            : battleResult === "lose"
            ? BattleResultLoseSound
            : BattleResultDrawSound
        }
      />
      <div className="container h-[80vh] grid place-items-center">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-full flex justify-center gap-7 sm:gap-24">
            <div className="w-1/3 flex flex-col items-end gap-7">
              <h3 className="text-xl">選択した作品</h3>
              <span className="text-2xl sm:text-3xl font-bold">
                {selectedItemName}
              </span>
            </div>
            <div className="w-1/3 flex flex-col items-start gap-7">
              <h3 className="text-xl">相手の作品</h3>
              <span className="text-2xl sm:text-3xl font-bold">
                {enemySelectedItemName}
              </span>
            </div>
          </div>

          <h2 className="text-5xl">
            {battleResult === "win" ? (
              <span className="text-pink-600 font-bold">勝ち！</span>
            ) : battleResult === "lose" ? (
              <span className=" text-indigo-600 font-bold">負け...</span>
            ) : (
              <span className="font-bold">引き分け</span>
            )}
          </h2>
          <Button onClick={handleNextGame}>次のゲームへ</Button>
        </div>
      </div>
    </>
  );
};

export default BattleResult;
