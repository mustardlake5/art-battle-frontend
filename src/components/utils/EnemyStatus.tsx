import { useAppSelector } from "../../app/hooks";
import { Phase } from "../../slices/statusSlice";
import { CheckAnimationIconLarge } from "./CheckIcon";
import Loading from "./Loading";

type EnemyStatusProps = {
  phase: Phase.PURCHASE | Phase.BATTLE;
};

const EnemyStatus = ({ phase }: EnemyStatusProps) => {
  const enemyProperty = useAppSelector((state) => state.room.enemyProperty);
  const isLoading =
    phase === Phase.PURCHASE
      ? !enemyProperty.purchaseDone!
      : !enemyProperty.artSelectDone!;

  return (
    <div className="flex-[0.3] flex flex-col items-center text-lg font-bold p-5 space-y-2 border border-t-stone-300 sm:border-t-0">
      <h3>相手: {enemyProperty.userName}</h3>
      <h3>相手の状態: {isLoading ? "準備中" : "準備完了"}</h3>
      <div className="flex flex-col gap-5">
        {isLoading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <CheckAnimationIconLarge />
          </>
        )}
      </div>
    </div>
  );
};

export default EnemyStatus;
