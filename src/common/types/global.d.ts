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
