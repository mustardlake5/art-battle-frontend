import { PriceList } from "../lib/priceList";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { decrementCartItem, incrementCartItem } from "../slices/cartSlice";
import { buyItem, returnItem } from "../slices/itemsSlice";
import PlusMinusNumberSelector from "./utils/PlusMinusNumberSelector";

type PurchaseItemControlProps = {
  itemId: keyof PriceList;
  price: number;
};

const PurchaseItemControl = ({ itemId }: PurchaseItemControlProps) => {
  const cartState = useAppSelector((state) => state.cart);
  const itemNum = cartState.items[itemId];

  const dispatch = useAppDispatch();

  const handlePlusClick = () => {
    dispatch(incrementCartItem({ itemName: itemId }));
    dispatch(buyItem({ itemName: itemId }));
  };

  const handleMinusClick = () => {
    dispatch(decrementCartItem({ itemName: itemId }));
    dispatch(returnItem({ itemName: itemId }));
  };

  return (
    <PlusMinusNumberSelector
      handleMinusClick={handleMinusClick}
      handlePlusClick={handlePlusClick}
      displayNum={itemNum}
    />
  );
};

export default PurchaseItemControl;
