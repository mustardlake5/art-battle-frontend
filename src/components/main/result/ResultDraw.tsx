import CustomHowler from "../../utils/CustomHowler";
import ResultDrawSound from "../../../assets/bgm/result/draw/draw_short.mp3";
import ResultMatchRecord from "./ResultMatchRecord";

const ResultDraw = () => {
  return (
    <>
      <CustomHowler src={ResultDrawSound} />
      <div className="relative w-full h-full grid place-items-center">
        <div>
          <ResultMatchRecord />
          <h2 className="text-6xl font-bold text-center mt-5">引き分け</h2>
        </div>
      </div>
    </>
  );
};

export default ResultDraw;
