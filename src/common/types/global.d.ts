import { Gamer } from '../../api/gamerz/entities/gamer.entity';

export type GamerDetails = {
  username: string;
  discriminator: string;
  discordId: string;
  avatar: string;
  accessToken: string;
  refreshToken: string;
};

export type Done = (err: Error, user: Gamer) => void;

export type GameDetails = {
  title: string;
  nbPlayers: number;
  gameType: string;
};

export type MyGameDetails = {
  gameId: number;
  gamerId: number;
};

export type MyFriendDetails = {
  idGamerAsHost: number;
  idGamerAsFriend: number;
};

export type StatusDetails = {
  dailyStatus: number;
  timeStatus: Date;
  gamerId: number;
};

export type SessionDetails = {
  linkGamerStatusByGameId: number;
  sessionName: string;
};

export type LinkGamerStatusByGameDetails = {
  myGameId: number;
  statusId: number;
};

export type SessionMemberDetails = {
  sessionId: number;
  gamerId: number;
};
