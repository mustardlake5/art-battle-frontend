import CustomHowler from "../../utils/CustomHowler";
import RainBox from "../../utils/RainBox";
import ResultLoseSound from "../../../assets/bgm/result/lose/憂愁_short.mp3";

const ResultLose = () => {
  return (
    <>
      <CustomHowler src={ResultLoseSound} />
      <div className="relative w-full h-full grid place-items-center">
        <h2 className="text-6xl font-bold">負け...</h2>
        <RainBox />
      </div>
    </>
  );
};

export default ResultLose;
