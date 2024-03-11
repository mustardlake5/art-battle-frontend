import RainBox from "../../utils/RainBox";

const ResultLose = () => {
  return (
    <div className="relative w-full h-full grid place-items-center">
      <h2 className="text-6xl font-bold">負け...</h2>
      <RainBox />
    </div>
  );
};

export default ResultLose;
