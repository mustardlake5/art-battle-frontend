export type PriceList = {
  fakePot: number;
  fakeSculpture: number;
  fakePainting: number;
  pot: number;
  sculpture: number;
  painting: number;
};

export const PRICE_LIST: PriceList = {
  fakePot: 150,
  fakeSculpture: 200,
  fakePainting: 250,
  pot: 300,
  sculpture: 400,
  painting: 500,
};

export type Item = {
  id: keyof PriceList;
  name: string;
  isGenuine: boolean;
  power: number;
  price: number;
};

export const ITEM_LIST: Item[] = [
  {
    id: "fakePot",
    name: "壺　（偽物）",
    isGenuine: false,
    power: 1,
    price: 150,
  },
  {
    id: "fakeSculpture",
    name: "彫刻（偽物）",
    isGenuine: false,
    power: 2,
    price: 200,
  },
  {
    id: "fakePainting",
    name: "絵画（偽物）",
    isGenuine: false,
    power: 3,
    price: 250,
  },
  { id: "pot", name: "壺　（本物）", isGenuine: true, power: 1, price: 300 },
  {
    id: "sculpture",
    name: "彫刻（本物）",
    isGenuine: true,
    power: 2,
    price: 400,
  },
  {
    id: "painting",
    name: "絵画（本物）",
    isGenuine: true,
    power: 3,
    price: 500,
  },
];

export const FAKE_ITEM_LIST = ITEM_LIST.filter(
  ({ isGenuine }: Item) => !isGenuine
);
export const GENUINE_ITEM_LIST = ITEM_LIST.filter(
  ({ isGenuine }: Item) => isGenuine
);
