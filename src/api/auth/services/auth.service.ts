import { Injectable, Logger } from '@nestjs/common';
import { GamerzService } from '../../gamerz/services/gamerz.service';
import { AuthenticationProvider } from './auth';
import { GamerDetails } from '../../../common/types/global';
import { Gamer } from '../../gamerz/entities/gamer.entity';

@Injectable()
export class AuthService implements AuthenticationProvider {
  constructor(private readonly gamerzService: GamerzService) {}
  private readonly logger = new Logger(AuthService.name);

  createGamer(details: GamerDetails): Promise<Gamer> {
    const newGamer = this.gamerzService.create(details);
    this.logger.log(
      `New gamer ${newGamer.username} created, saving it to database`,
    );
    return this.gamerzService.save(newGamer);
  }

  findGamer(discordId: string): Promise<Gamer | undefined> {
    return this.gamerzService.findOneByDiscordId(discordId);
  }

  async validateGamer(details: GamerDetails): Promise<Gamer> {
    const { discordId } = details;
    const gamer = await this.gamerzService.findOneByDiscordId(discordId);
    if (gamer) {
      await this.gamerzService.update({ discordId }, details);
      this.logger.log(
        `Validating gamer aka : ${gamer.username}, data was updated`,
      );
      return gamer;
    } else {
      this.logger.log('No gamer found, creating new one...');
      return this.createGamer(details);
    }
  }
}
