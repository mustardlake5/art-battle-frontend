import { Phase } from "../slices/statusSlice";
import OwnStatus from "./OwnStatus";
import EnemyStatus from "./utils/EnemyStatus";

const PurchaseCard = () => {
  return (
    <div className="flex mt-10 min-h-[75vh] border border-stone-300 rounded-lg shadow-lg">
      <OwnStatus />
      <EnemyStatus phase={Phase.PURCHASE} />
    </div>
  );
};

export default PurchaseCard;
