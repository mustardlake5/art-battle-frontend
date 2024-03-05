import OwnStatus from "./OwnStatus";
import EnemyStatus from "./EnemyStatus";

const PurchaseCard = () => {
  return (
    <div className="flex mt-10 min-h-[75vh] border border-stone-300 rounded-lg shadow-lg">
      <OwnStatus />
      <EnemyStatus />
    </div>
  );
};

export default PurchaseCard;
