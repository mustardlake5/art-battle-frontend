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
  price: number;
};

export const ITEM_LIST: Item[] = [
  { id: "fakePot", name: "壺(偽物)", price: 150 },
  { id: "fakeSculpture", name: "彫刻(偽物)", price: 200 },
  { id: "fakePainting", name: "絵画(偽物)", price: 250 },
  { id: "pot", name: "壺(本物)", price: 300 },
  { id: "sculpture", name: "彫刻(本物)", price: 400 },
  { id: "painting", name: "絵画(本物)", price: 500 },
];
