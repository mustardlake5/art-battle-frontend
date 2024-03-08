import { ITEM_LIST, PriceList } from "./priceList";

export function judgeBattleResult(
  ownSelectedItem: keyof PriceList | "null",
  enemySelectedItem: keyof PriceList | "null"
): "win" | "lose" | "draw" {
  let ownItemisGenuine: boolean;
  let ownItemPower: number;

  let enemyItemIsGenuine: boolean;
  let enemyItemPower: number;

  if (ownSelectedItem === "null") {
    ownItemisGenuine = false;
    ownItemPower = 0;
  } else {
    const ownItem = ITEM_LIST.find((item) => item.id === ownSelectedItem)!;
    ownItemisGenuine = ownItem.isGenuine;
    ownItemPower = ownItem.power;
  }

  if (enemySelectedItem === "null") {
    enemyItemIsGenuine = false;
    enemyItemPower = 0;
  } else {
    const enemyItem = ITEM_LIST.find((item) => item.id === enemySelectedItem)!;
    enemyItemIsGenuine = enemyItem.isGenuine;
    enemyItemPower = enemyItem.power;
  }

  if (ownItemPower === 0 && enemyItemPower === 0) {
    return "draw";
  }
  if (ownItemPower === 0 && enemyItemPower !== 0) {
    return "lose";
  }
  if (ownItemPower !== 0 && enemyItemPower === 0) {
    return "win";
  }

  if (!ownItemisGenuine && enemyItemIsGenuine) {
    return "lose";
  }
  if (ownItemisGenuine && !enemyItemIsGenuine) {
    return "win";
  }

  if (
    (!ownItemisGenuine && !enemyItemIsGenuine) ||
    (ownItemisGenuine && enemyItemIsGenuine)
  ) {
    if (ownItemPower < enemyItemPower) {
      return "lose";
    }
    if (ownItemPower > enemyItemPower) {
      return "win";
    }
    return "draw";
  }
  throw new Error();
}
