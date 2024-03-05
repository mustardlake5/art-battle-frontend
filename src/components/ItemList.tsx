import { ITEM_LIST } from "../lib/priceList";
import Item from "./Item";

const ItemList = () => {
  return (
    <div className="space-y-3">
      {ITEM_LIST.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
