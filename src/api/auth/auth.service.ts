import { Injectable, Logger } from '@nestjs/common';
import { GamerzService } from '../gamerz/gamerz.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: GamerzService) {}
  private readonly logger = new Logger(AuthService.name);

  async findUserFromDiscordId(data: DiscordUserData): Promise<any> {
    let user = await this.usersService.findOneByDiscordId(data.id);

    if (!user) {
      const newUser: UserDTO = {
        discordId: data.id,
        username: data.username,
        avatar: data.avatar,
      };
      user = await this.usersService.save(newUser);
      this.logger.log('user not found in DB, creating new one');
    }

    return user;
  }
}
