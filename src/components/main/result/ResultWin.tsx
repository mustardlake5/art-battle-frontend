import CustomHowler from "../../utils/CustomHowler";
import StarBox from "../../utils/StarBox";
import ResultWinSound from "../../../assets/bgm/result/win/カラフルな生活_short.mp3";
import ResultMatchRecord from "./ResultMatchRecord";

const ResultWin = () => {
  return (
    <>
      <CustomHowler src={ResultWinSound} />
      <div className="relative w-full h-full grid place-items-center">
        <div>
          <ResultMatchRecord />
          <h2 className="text-pink-600 text-6xl font-bold text-center mt-5">
            勝ち！
          </h2>
        </div>
        <StarBox />
      </div>
    </>
  );
};

export default ResultWin;
