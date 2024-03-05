export type RoomState = {
  roomIndex?: number;
  roomId: string | null;
  roomName: string | null;
  matching: boolean;
  prepareForBattleDone?: boolean;
  ownProperty: {
    userType?: "user1" | "user2";
    socketId: string | null;
    userName: string | null;
    purchaseDone?: boolean;
  };
  enemyProperty: {
    userType?: "user1" | "user2";
    socketId: string | null;
    userName: string | null;
    purchaseDone?: boolean;
  };
};

export type User = {
  socketId: string;
  userName: string;
  purchaseDone?: boolean;
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

