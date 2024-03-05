import { useAppSelector } from "../app/hooks";
import Loading from "./utils/Loading";
import { CheckAnimationIconLarge } from "./utils/CheckIcon";

const EnemyStatus = () => {
  const enemyProperty = useAppSelector((state) => state.room.enemyProperty);

  return (
    <div className="flex-[0.3] text-lg font-bold p-5">
      <h3>相手: {enemyProperty.userName}</h3>
      <h3>相手の状態: {enemyProperty.purchaseDone ? "準備完了" : "準備中"}</h3>
      <div className="flex flex-col gap-5">
        {!enemyProperty.purchaseDone ? (
          <>
            <h3>準備中</h3>
            <Loading />
          </>
        ) : (
          <>
            <h3>準備完了</h3>
            <CheckAnimationIconLarge />
          </>
        )}
      </div>
    </div>
  );
};

export default EnemyStatus;
