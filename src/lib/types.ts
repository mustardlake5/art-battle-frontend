export type RoomState = {
  roomIndex?: number;
  roomId: string | null;
  roomName: string | null;
  matching: boolean;
  matchNum: number;
  prepareForBattleDone?: boolean;
  matchRecord: {
    win: number;
    lose: number;
    draw: number;
  };
  ownProperty: {
    userType?: "user1" | "user2";
    socketId: string | null;
    userName: string | null;
    purchaseDone?: boolean;
    artSelectDone?: boolean;
  };
  enemyProperty: {
    userType?: "user1" | "user2";
    socketId: string | null;
    userName: string | null;
    purchaseDone?: boolean;
    artSelectDone?: boolean;
  };
  battleResult: "win" | "lose" | "draw" | null;
};

export type User = {
  socketId: string;
  userName: string;
  purchaseDone?: boolean;
  artSelectDone?: boolean;
};

export type ItemList =
  | "fakePot"
  | "fakeSculpture"
  | "fakePainting"
  | "pot"
  | "sculpture"
  | "painting"
  | "null";

export type ArtSelectedUser = User & {
  selectedItem: ItemList;
};

export type MessageFromServer = {
  type: "createRoom" | "match" | "battle";
  data: any;
};

export type MessageFromClient = {
  type: "createRoom" | "match" | "battle";
  data: any;
};

export type CreateRoomMessageToServer = {
  type: "createRoom";
  roomName: string;
  userName: string;
};

export type CreateRoomMessageFromServer = {
  type: "createRoom";
  matching: boolean;
  roomIndex: number;
  roomId: string;
  roomName: string;
  isRoomOwner: boolean;
  user1: {
    userName: string;
    socketId: string;
  };
  user2?: {
    userName: string;
    socketId: string;
  };
};

export type PurchaseDoneMessageToServer = {
  type: "purchaseDone";
  roomIndex: number;
  roomId: string;
  roomName: string;
  user: Omit<Required<User>, "artSelectDone">;
};

export type PurchaseDoneMessageFromServer = {
  type: "purchaseDone";
  roomId: string;
  roomName: string;
  prepareForBattleDone: boolean;
  user1: Required<User>;
  user2: Required<User>;
};

export type SelectItemDoneMessageToServer = {
  roomIndex: number;
  roomId: string;
  roomName: string;
  user: Required<ArtSelectedUser>;
};

export type EitherPlayerSelectDoneMessage = {
  roomId: string;
  roomName: string;
  battleItemSelectDone: boolean;
  user1: Required<User>;
  user2: Required<User>;
};

export type BothPlayerSelectDoneMessage = {
  roomId: string;
  roomName: string;
  battleItemSelectDone: boolean;
  user1: Required<ArtSelectedUser>;
  user2: Required<ArtSelectedUser>;
};

export type BattleResultMessageToServer = {
  roomIndex: number;
  roomId: string;
  roomName: string;
};
