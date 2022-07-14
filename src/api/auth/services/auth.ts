import { GamerDetails } from '../../../common/types/global';
import { Gamer } from '../../gamerz/entities/gamer.entity';

export interface AuthenticationProvider {
  validateGamer(details: GamerDetails): Promise<Gamer>;
  createGamer(details: GamerDetails): Promise<Gamer>;
  findGamer(discordId: string): Promise<Gamer | undefined>;
}
