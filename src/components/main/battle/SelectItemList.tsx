import {
  FAKE_ITEM_LIST,
  GENUINE_ITEM_LIST,
  PriceList,
} from "../../../lib/priceList";
import RadioItem from "../../utils/RadioItem";

type SelectedItemListProps = {
  selectedItem: keyof PriceList | "null";
  setSelectedItem: React.Dispatch<
    React.SetStateAction<keyof PriceList | "null">
  >;
};

const SelectItemList = ({
  selectedItem,
  setSelectedItem,
}: SelectedItemListProps) => {
  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedItem(e.target.value as keyof PriceList | "null");
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center">
      <div className="lg:flex-[0.4] flex flex-col items-center">
        {FAKE_ITEM_LIST.map((item) => (
          <RadioItem
            key={item.id}
            handleRadio={handleRadio}
            selectedItem={selectedItem}
            itemId={item.id}
            itemName={item.name}
          />
        ))}
        <RadioItem
          notSelectedItem={true}
          key="null"
          handleRadio={handleRadio}
          selectedItem={selectedItem}
          itemId="null"
          itemName="null"
        />
      </div>
      <div className="lg:flex-[0.4] flex flex-col items-center">
        {GENUINE_ITEM_LIST.map((item) => (
          <RadioItem
            key={item.id}
            handleRadio={handleRadio}
            selectedItem={selectedItem}
            itemId={item.id}
            itemName={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectItemList;
