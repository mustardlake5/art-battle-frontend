import { useAppSelector } from "../../../app/hooks";

const ResultMatchRecord = () => {
  const { matchRecord } = useAppSelector((state) => state.room);
  const { win, lose, draw } = matchRecord;
  return (
    <div className="flex items-center gap-5 justify-center">
      <div className="flex gap-5 bg-emerald-100 p-5 rounded-lg">
        <span className="text-xl font-bold bg-pink-500 text-white p-1 rounded-md">
          勝ち　　: {win}
        </span>
        <span className="text-xl font-bold bg-indigo-500 text-white p-1 rounded-md">
          負け　　: {lose}
        </span>
        <span className="text-xl font-bold bg-slate-500 text-white p-1 rounded-md">
          引き分け: {draw}
        </span>
      </div>
    </div>
  );
};

export default ResultMatchRecord;
