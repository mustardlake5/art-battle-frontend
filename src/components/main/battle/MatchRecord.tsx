import { useAppSelector } from "../../../app/hooks";

const MatchRecord = () => {
  const { matchNum, matchRecord } = useAppSelector((state) => state.room);
  const { win, lose, draw } = matchRecord;
  return (
    <div className="flex items-center gap-5 justify-center">
      <div className="flex flex-col">
        <span className="text-xl font-bold text-red-800">勝ち　　: {win}</span>
        <span className="text-xl font-bold text-blue-800">
          負け　　: {lose}
        </span>
        <span className="text-xl font-bold">引き分け: {draw}</span>
      </div>
      <span className="text-3xl font-bold">
        | 　{win + lose + draw + 1} <span className="text-2xl">試合目</span> /{" "}
        <span className=" text-xl">{matchNum} 試合</span>
      </span>
    </div>
  );
};

export default MatchRecord;
