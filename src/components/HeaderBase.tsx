import { Volume2, VolumeX } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleMute } from "../slices/soundSlice";

type HeaderBaseProps = {
  bgColor: string;
  textColor: string;
  title: string;
};

const HeaderBase = ({ bgColor, textColor, title }: HeaderBaseProps) => {
  const mute = useAppSelector((state) => state.sound.mute);
  const dispatch = useAppDispatch();

  function handleSound() {
    dispatch(toggleMute());
  }

  return (
    <header className={`relative ${bgColor} ${textColor} p-5`}>
      <h1 className="text-center text-xl font-bold">{title}</h1>
      <button onClick={handleSound} className="absolute top-5 right-5">
        {mute ? <VolumeX /> : <Volume2 />}
      </button>
    </header>
  );
};

export default HeaderBase;
