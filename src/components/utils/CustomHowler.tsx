import ReactHowler, { PropTypes } from "react-howler";
import { useAppSelector } from "../../app/hooks";

const CustomHowler = (props: Omit<PropTypes, "mute" | "volume" | "loop">) => {
  const { mute, volume } = useAppSelector((state) => state.sound);
  return <ReactHowler mute={mute} volume={volume} loop={true} {...props} />;
};

export default CustomHowler;
