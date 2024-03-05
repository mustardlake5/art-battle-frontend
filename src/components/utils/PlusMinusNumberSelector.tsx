import { Minus, Plus } from "lucide-react";

type PlusMinusNumberSelectorProps = {
  handleMinusClick: () => void;
  handlePlusClick: () => void;
  displayNum: number;
};

// - 1 + こんな感じの部品コンポーネント
const PlusMinusNumberSelector = ({
  handleMinusClick,
  handlePlusClick,
  displayNum,
}: PlusMinusNumberSelectorProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        className="h-6 w-6 rounded-full grid place-items-center border border-stone-900 hover:bg-stone-300"
        onClick={handleMinusClick}
        disabled={displayNum === 0}
      >
        <Minus className="h-4 w-4" />
      </button>
      <div className="text-3xl font-bold tracking-tighter">{displayNum}</div>
      <button
        className="h-6 w-6 rounded-full grid place-items-center border border-stone-900 hover:bg-stone-300"
        onClick={handlePlusClick}
        disabled={false}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default PlusMinusNumberSelector;
