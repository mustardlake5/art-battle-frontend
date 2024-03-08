import { Phase } from "../../../slices/statusSlice";
import EnemyStatus from "../../utils/EnemyStatus";
import OwnSelectStatus from "./OwnSelectStatus";

const BattleSelectItem = () => {
  return (
    <div className="mt-10 sm:flex sm:min-h-[50vh] md:min-h-[75vh] border border-stone-300 rounded-lg shadow-lg">
      <OwnSelectStatus />
      <EnemyStatus phase={Phase.BATTLE} />
    </div>
  );
};

export default BattleSelectItem;
