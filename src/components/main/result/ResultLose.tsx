import CustomHowler from "../../utils/CustomHowler";
import RainBox from "../../utils/RainBox";
import ResultLoseSound from "../../../assets/bgm/result/lose/憂愁_short.mp3";
import ResultMatchRecord from "./ResultMatchRecord";

const ResultLose = () => {
  return (
    <>
      <CustomHowler src={ResultLoseSound} />
      <div className="relative w-full h-full grid place-items-center">
        <div>
          <ResultMatchRecord />
          <h2 className="text-indigo-600 text-6xl font-bold text-center mt-5">
            負け...
          </h2>
        </div>
        <RainBox />
      </div>
    </>
  );
};

export default ResultLose;
