import CustomHowler from "../../utils/CustomHowler";
import StarBox from "../../utils/StarBox";
import ResultWinSound from "../../../assets/bgm/result/win/カラフルな生活_short.mp3";

const ResultWin = () => {
  return (
    <>
      <CustomHowler src={ResultWinSound} />
      <div className="relative w-full h-full grid place-items-center">
        <h2 className="text-6xl font-bold">勝ち！</h2>
        <StarBox />
      </div>
    </>
  );
};

export default ResultWin;
