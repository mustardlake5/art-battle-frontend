import { useAppSelector } from "../../app/hooks";
import { PriceList } from "../../lib/priceList";

type RadioItemProps = {
  handleRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
  notSelectedItem?: boolean;
  selectedItem: string | null;
  itemId: keyof PriceList | "null";
  itemName: string;
};

const RadioItem = ({
  handleRadio,
  notSelectedItem,
  selectedItem,
  itemId,
  itemName,
}: RadioItemProps) => {
  const items = useAppSelector((state) => state.items.items);
  const itemNum: number = itemId === "null" ? -1 : items[itemId];
  const checked = itemId === selectedItem;
  const disabled: boolean = itemNum === 0;
  const label = notSelectedItem
    ? "アイテムを選択しない"
    : `${itemName}: ${itemNum}`;
  return (
    <label
      className={`w-full flex gap-3 justify-center border py-3 hover:bg-slate-400 ${
        checked && "bg-slate-600 hover:bg-slate-600 text-slate-300"
      } ${disabled && "text-slate-300 hover:bg-white"}`}
    >
      <input
        className="hidden"
        type="radio"
        onChange={handleRadio}
        id={itemId}
        name="item"
        value={itemId}
        checked={checked}
        disabled={disabled}
      />
      {label}
    </label>
  );
};

export default RadioItem;
