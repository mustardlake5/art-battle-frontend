import { useAppSelector } from "../app/hooks";
import { Item as ItemModel } from "../lib/priceList";
import PurchaseItemControl from "./PurchaseItemControl";

type ItemProps = {
  item: ItemModel;
};

const Item = ({ item }: ItemProps) => {
  const { id, name, price } = item;
  const itemNum = useAppSelector((state) => state.cart.items[id]);
  return (
    <div className="flex justify-between items-center border-b px-3 py-3">
      <div className="w-3/5 flex justify-between border-stone-500">
        <span>{name}</span>
        <span>{price}円</span>
      </div>
      <PurchaseItemControl itemId={id} price={price} />
      <span>合計：{price * itemNum}円</span>
    </div>
  );
};

export default Item;
