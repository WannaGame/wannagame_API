import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async findUserFromDiscordId(data: DiscordUserData): Promise<any> {
    let user = await this.usersService.findOneByDiscordId(parseInt(data.id));

    if (!user) {
      const newUser: UserDTO = {
        discordId: parseInt(data.id),
        username: data.username,
        avatar: data.avatar,
      };
      user = await this.usersService.save(newUser);
    }

    return user;
  }
}
