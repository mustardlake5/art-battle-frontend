import Battle from "../components/main/Battle";
import BattleResult from "../components/main/BattleResult";
import Initial from "../components/main/Initial";
import Purchase from "../components/main/Purchase";
import Result from "../components/main/Result";
import SearchEnemy from "../components/main/SearchEnemy";
import { Phase } from "../slices/statusSlice";

type MainProps = {
  phase: Phase;
};

const Main = ({ phase }: MainProps) => {
  const { INITIAL, SEARCH_ENEMY, PURCHASE, BATTLE, BATTLE_RESULT, RESULT } =
    Phase;
  return (
    <main className="flex-1 container mx-auto">
      {phase === INITIAL ? (
        <Initial />
      ) : phase === SEARCH_ENEMY ? (
        <SearchEnemy />
      ) : phase === PURCHASE ? (
        <Purchase />
      ) : phase === BATTLE ? (
        <Battle />
      ) : phase === BATTLE_RESULT ? (
        <BattleResult />
      ) : phase === RESULT ? (
        <Result />
      ) : (
        <Initial />
      )}
    </main>
  );
};

export default Main;
