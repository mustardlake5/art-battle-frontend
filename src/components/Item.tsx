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
    <div className="flex justify-around items-center border-b px-3 py-3">
      <span>{name}</span>
      <span>{price}万円</span>
      <PurchaseItemControl itemId={id} price={price} />
      <div className="w-1/5 flex flex-col sm:flex-row">
        <span>合計：</span>
        <span>{itemNum === 0 ? 0 : `${price * itemNum}万`}円</span>
      </div>
    </div>
  );
};

export default Item;
