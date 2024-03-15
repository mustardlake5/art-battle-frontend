import { Phase } from "../slices/statusSlice";
import OwnStatus from "./OwnStatus";
import EnemyStatus from "./utils/EnemyStatus";

const PurchaseCard = () => {
  return (
    <div className="mt-10 sm:flex sm:min-h-[50vh] md:min-h-[75vh] border border-stone-300 rounded-lg shadow-lg">
      <OwnStatus />
      <EnemyStatus phase={Phase.PURCHASE} />
    </div>
  );
};

export default PurchaseCard;
