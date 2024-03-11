import { useAppSelector } from "../../app/hooks";
import ResultWin from "./result/ResultWin";
import ResultLose from "./result/ResultLose";
import ResultDraw from "./result/ResultDraw";

const Result = () => {
  const matchResult = useAppSelector((state) => state.room.matchResult)!;
  return (
    <>
      {matchResult === "win" ? (
        <ResultWin />
      ) : matchResult === "lose" ? (
        <ResultLose />
      ) : (
        <ResultDraw />
      )}
    </>
  );
};

export default Result;
