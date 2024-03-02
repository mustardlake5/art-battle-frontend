import { Phase } from "../slices/statusSlice";

type HeaderDesign = {
  title:
    | "対戦待ち"
    | "対戦相手を探しています"
    | "購入フェーズ"
    | "対戦フェーズ"
    | "対戦結果";
  bgColor: string;
  textColor: string;
};

export const createHeaderDesign = (phase: Phase): HeaderDesign => {
  switch (phase) {
    case Phase.INITIAL:
      return {
        title: "対戦待ち",
        bgColor: "bg-slate-500",
        textColor: "text-white",
      };
    case Phase.SEARCH_ENEMY:
      return {
        title: "対戦相手を探しています",
        bgColor: "bg-rose-400",
        textColor: "text-white",
      };
    case Phase.PURCHASE:
      return {
        title: "購入フェーズ",
        bgColor: "bg-stone-500",
        textColor: "text-white",
      };
    case Phase.BATTLE:
      return {
        title: "対戦フェーズ",
        bgColor: "bg-violet-600",
        textColor: "text-white",
      };
    case Phase.RESULT:
      return {
        title: "対戦結果",
        bgColor: "bg-teal-500",
        textColor: "text-white",
      };
    default:
      return {
        title: "対戦待ち",
        bgColor: "bg-slate-500",
        textColor: "text-white",
      };
  }
};
