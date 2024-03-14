import CustomHowler from "../../utils/CustomHowler";
import ResultDrawSound from "../../../assets/bgm/result/draw/それぞれの帰り道_short.mp3";

const ResultDraw = () => {
  return (
    <>
      <CustomHowler src={ResultDrawSound} />
      <div className="relative w-full h-full grid place-items-center">
        <h2 className="text-6xl font-bold">引き分け</h2>
      </div>
    </>
  );
};

export default ResultDraw;
