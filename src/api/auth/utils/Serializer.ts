import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Gamer } from '../../gamerz/entities/gamer.entity';
import { Done } from '../../../common/types/global';
import { AuthenticationProvider } from '../services/auth';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authService: AuthenticationProvider,
  ) {
    super();
  }
  serializeUser(user: Gamer, done: Done): void {
    done(null, user);
  }

  async deserializeUser(user: Gamer, done: Done): Promise<void> {
    const gamerDB = await this.authService.findGamer(user.discordId);
    return gamerDB ? done(null, gamerDB) : done(null, null);
  }
}
