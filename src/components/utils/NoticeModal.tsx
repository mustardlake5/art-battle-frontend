import { Circle, X } from "lucide-react";
import { useAppDispatch } from "../../app/hooks";
import { setMute } from "../../slices/soundSlice";

type NoticeModalProps = {
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const NoticeModal = ({ setDisplayModal }: NoticeModalProps) => {
  const dispatch = useAppDispatch();
  function handleMute(mute: boolean) {
    dispatch(setMute(mute));
    localStorage.setItem("mute", mute ? "true" : "false");
    setDisplayModal(false);
  }
  return (
    <div className="absolute grid place-items-center w-screen h-screen bg-slate-900 bg-opacity-80 z-10">
      <div className="w-11/12 h-1/4 sm:w-2/3 sm:h-1/2 bg-slate-200 rounded-lg shadow-lg grid place-items-center">
        <div className="p-2">
          <p className="text-base sm:text-xl">
            このゲームで音楽を流してもいいですか？
          </p>
          <p className="mt-2 text-sm sm:text-base">
            (右上の音量ボタンでいつでもミュート切り替えができます)
          </p>
          <div className="mt-5 p-2 flex">
            <button
              onClick={() => handleMute(false)}
              className="flex-[0.5] bg-emerald-700 p-2 rounded-s-lg hover:bg-emerald-500"
            >
              <Circle size={36} className="text-slate-300 mx-auto" />
            </button>
            <button
              onClick={() => handleMute(true)}
              className="flex-[0.5] bg-rose-700 p-2 rounded-e-lg hover:bg-rose-500"
            >
              <X size={36} className="text-slate-300 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
